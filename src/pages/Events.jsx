import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { CategoryBadge } from "@/components/ui/category-badge";
import { ActionButton } from "@/components/ui/action-button";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { DashboardLayout } from "../layout/DashboardLayout";

const categories = [
  "Music",
  "Art",
  "Sport",
  "Tech",
  "Food",
  "Business",
  "Education",
  "Others",
];

const eventsData = [
  {
    id: 1,
    title: "Summer Music Festival",
    organizer: "TechCrop",
    category: "Music",
    status: "published",
    date: "26-11-2025",
    featured: "request",
    boosted: null,
  },
  {
    id: 2,
    title: "Tech Conference 2025",
    organizer: "John Deo",
    category: "IT",
    status: "published",
    date: "25-01-2026",
    featured: "request",
    boosted: null,
  },
  {
    id: 3,
    title: "Food & Wine Expo",
    organizer: "City Events Co.",
    category: "Food",
    status: "closed",
    date: "25-01-2026",
    featured: "request",
    boosted: "approved",
  },
  {
    id: 4,
    title: "Marathon Challenge",
    organizer: "Innovate Hub",
    category: "Sports",
    status: "published",
    date: "25-01-2026",
    featured: null,
    boosted: "approved",
  },
  {
    id: 5,
    title: "Local Art Fair",
    organizer: "Jane Smith",
    category: "Art",
    status: "closed",
    date: "25-01-2026",
    featured: null,
    boosted: "approved",
  },
];

export default function Events() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [newCategory, setNewCategory] = useState("");

  const tabs = [
    { id: "all", label: "All Event" },
    { id: "featured", label: "Featured" },
    { id: "boosted", label: "Boosted" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-foreground">
            Event Management
          </h1>
          <p className="text-sm text-muted-foreground">
            Manage and approve events
          </p>
        </div>

        {/* Event Categories */}
        <div className="bg-card rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Event Categories
          </h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((cat) => (
              <CategoryBadge
                key={cat}
                category={cat}
                removable
                onRemove={() => {}}
              />
            ))}
          </div>
          <div className="flex gap-3">
            <Input
              placeholder="Add New Category..."
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="max-w-xs"
            />
            <Button>Add</Button>
          </div>
        </div>

        {/* Events Table */}
        <div className="bg-card rounded-xl shadow-sm">
          {/* Tabs */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-6 py-2 text-sm font-medium transition-colors relative",
                    activeTab === tab.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                  )}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 w-64"
              />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="px-4 py-2">
            <div className="h-1 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-linear-to-r from-primary to-teal-400 rounded-full" />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">
                    Organizer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">
                    Date
                  </th>

                  {(activeTab === "all" || activeTab === "featured") && (
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">
                      Featured*
                    </th>
                  )}

                  {(activeTab === "all" || activeTab === "boosted") && (
                    <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">
                      Boosted*
                    </th>
                  )}

                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-border">
                {eventsData.map((event) => (
                  <tr key={event.id} className="hover:bg-muted/30">
                    <td className="px-6 py-4 text-sm font-medium">
                      {event.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {event.organizer}
                    </td>
                    <td className="px-6 py-4">
                      <CategoryBadge category={event.category} />
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={event.status} />
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {event.date}
                    </td>

                    {(activeTab === "all" || activeTab === "featured") && (
                      <td className="px-6 py-4">
                        {event.featured && (
                          <StatusBadge status={event.featured} />
                        )}
                      </td>
                    )}

                    {(activeTab === "all" || activeTab === "boosted") && (
                      <td className="px-6 py-4">
                        {event.boosted && (
                          <StatusBadge status={event.boosted} />
                        )}
                      </td>
                    )}

                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <ActionButton type="view" />
                        {(event.featured === "request" ||
                          event.boosted === "request") && (
                          <>
                            <ActionButton type="approve" />
                            <ActionButton type="reject" />
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
