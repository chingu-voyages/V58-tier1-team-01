import React, { useState, useMemo } from "react";
import { mockChinguData } from "../services/mockData";
import SearchFilters from "./SearchFilters";
import { ChevronDown, ChevronUp, AlertCircle } from "lucide-react";

const ITEMS_PER_PAGE = 10;

const TableHeader = ({ label, field, sortConfig, onSort }) => (
  <th
    onClick={() => onSort(field)}
    className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors whitespace-nowrap select-none"
  >
    <div className="flex items-center gap-1">
      {label}
      <div className="flex flex-col">
        <ChevronUp
          size={10}
          className={`text-gray-400 ${
            sortConfig?.key === field && sortConfig.direction === "asc"
              ? "text-indigo-600"
              : ""
          }`}
        />
        <ChevronDown
          size={10}
          className={`text-gray-400 ${
            sortConfig?.key === field && sortConfig.direction === "desc"
              ? "text-indigo-600"
              : ""
          } -mt-1`}
        />
      </div>
    </div>
  </th>
);

const ListPage = () => {
  const [filters, setFilters] = useState({});
  const [activeFilters, setActiveFilters] = useState({});
  const [sortConfig, setSortConfig] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    setActiveFilters(filters);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setFilters({});
    setActiveFilters({});
    setCurrentPage(1);
    setSortConfig(null);
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const filteredData = useMemo(() => {
    return mockChinguData.filter((item) => {
      const itemYear = new Date(item.timestamp).getFullYear().toString();
      return Object.entries(activeFilters).every(([key, value]) => {
        if (!value) return true;
        if (key === "year") return itemYear === value;
        return item[key] === value;
      });
    });
  }, [activeFilters]);

  const sortedData = useMemo(() => {
    if (!sortConfig) return filteredData;
    return [...filteredData].sort((a, b) => {
      let aValue =
        sortConfig.key === "year"
          ? new Date(a.timestamp).getFullYear()
          : a[sortConfig.key];
      let bValue =
        sortConfig.key === "year"
          ? new Date(b.timestamp).getFullYear()
          : b[sortConfig.key];
      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortConfig]);

  const totalPages = Math.max(1, Math.ceil(sortedData.length / ITEMS_PER_PAGE));
  const paginatedData = sortedData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 min-h-screen flex flex-col gap-6">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-brand-dark mb-1">
          Member Directory
        </h1>
        <p className="text-gray-600">
          Explore the Chingu community demographics across voyages and tiers.
        </p>
      </div>

      <SearchFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        onApply={applyFilters}
        onClear={clearFilters}
      />

      <div className="glass-card overflow-hidden flex-grow flex flex-col">
        {sortedData.length > 0 ? (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead className="table-header sticky top-0 z-10 border-b border-gray-200">
                  <tr>
                    <TableHeader
                      label="Joined"
                      field="timestamp"
                      sortConfig={sortConfig}
                      onSort={handleSort}
                    />
                    <TableHeader
                      label="Gender"
                      field="gender"
                      sortConfig={sortConfig}
                      onSort={handleSort}
                    />
                    <TableHeader
                      label="Country"
                      field="country"
                      sortConfig={sortConfig}
                      onSort={handleSort}
                    />
                    <TableHeader
                      label="Year"
                      field="year"
                      sortConfig={sortConfig}
                      onSort={handleSort}
                    />
                    <TableHeader
                      label="Role Type"
                      field="roleType"
                      sortConfig={sortConfig}
                      onSort={handleSort}
                    />
                    <TableHeader
                      label="Role"
                      field="role"
                      sortConfig={sortConfig}
                      onSort={handleSort}
                    />
                    <TableHeader
                      label="Solo Tier"
                      field="soloProjectTier"
                      sortConfig={sortConfig}
                      onSort={handleSort}
                    />
                    <TableHeader
                      label="Voyage Tier"
                      field="voyageTier"
                      sortConfig={sortConfig}
                      onSort={handleSort}
                    />
                    <TableHeader
                      label="Voyage"
                      field="voyage"
                      sortConfig={sortConfig}
                      onSort={handleSort}
                    />
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {paginatedData.map((member) => (
                    <tr
                      key={member.id}
                      className="table-row transition-colors odd:bg-white even:bg-gray-50"
                    >
                      <td className="p-4 text-sm font-medium text-gray-900">
                        {new Date(member.timestamp).toLocaleDateString()}
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        {member.gender}
                      </td>
                      <td className="p-4 text-sm text-gray-600 font-medium">
                        🌍 {member.country}
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        {new Date(member.timestamp).getFullYear()}
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        <span className="inline-block px-2 py-1 rounded-lg bg-indigo-100 text-indigo-700 text-xs font-semibold">
                          {member.roleType}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        {member.role}
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        {member.soloProjectTier}
                      </td>
                      <td className="p-4 text-sm text-gray-600">
                        {member.voyageTier}
                      </td>
                      <td className="p-4 text-sm text-indigo-600 font-medium">
                        {member.voyage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 border-t border-gray-200 flex justify-between items-center bg-white">
              <span className="text-sm text-gray-500">
                Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} to{" "}
                {Math.min(currentPage * ITEMS_PER_PAGE, sortedData.length)} of{" "}
                {sortedData.length} members
              </span>

              <div className="flex gap-2 items-center">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                          currentPage === page
                            ? "bg-brand-dark text-white"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}
                </div>

                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <AlertCircle size={48} className="mb-4 text-gray-300" />
            <h3 className="text-lg font-medium text-gray-600">
              No members found
            </h3>
            <p className="mb-6 text-center max-w-sm">
              We couldn't find any members matching your current filters. Try
              adjusting your criteria or clearing filters.
            </p>
            <button
              onClick={clearFilters}
              className="text-indigo-600 font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListPage;
