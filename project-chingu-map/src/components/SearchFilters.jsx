import { Filter, X } from "lucide-react";
import { getUniqueValues, getYears } from "../services/mockData";

const SearchFilters = ({ filters, onFilterChange, onApply, onClear }) => {
  const renderSelect = (label, fieldKey, options) => (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-gray-500 uppercase">
        {label}
      </label>
      <select
        value={filters[fieldKey] || ""}
        onChange={(e) => onFilterChange(fieldKey, e.target.value)}
        className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500 transition-all"
      >
        <option value="">{`All ${label}s`}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="glass-card p-6 mb-8 border border-gray-100">
      <div className="flex items-center gap-2 mb-6 text-gray-800">
        <Filter className="w-5 h-5 text-indigo-600" />
        <h3 className="font-bold text-lg">Filter Demographics</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {renderSelect("Gender", "gender", getUniqueValues("gender"))}
        {renderSelect("Country", "country", getUniqueValues("country"))}
        {renderSelect("Year Joined", "year", getYears())}
        {renderSelect("Role Type", "roleType", getUniqueValues("roleType"))}
        {renderSelect("Role", "role", getUniqueValues("role"))}
        {renderSelect(
          "Solo Tier",
          "soloProjectTier",
          getUniqueValues("soloProjectTier")
        )}
        {renderSelect(
          "Voyage Tier",
          "voyageTier",
          getUniqueValues("voyageTier")
        )}
        {renderSelect("Voyage", "voyage", getUniqueValues("voyage"))}
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
        <button
          onClick={onClear}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-gray-600 font-medium hover:bg-gray-100 transition-colors"
        >
          <X size={18} />
          Clear Filters
        </button>
        <button
          onClick={onApply}
          className="px-8 py-2.5 rounded-xl bg-brand-dark text-white font-medium hover:bg-brand-green transition-colors shadow cursor-pointer"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default SearchFilters;
