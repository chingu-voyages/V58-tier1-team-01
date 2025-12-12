import React, { useState, useEffect, useMemo } from "react";
import ChinguMap from "./ChinguMap";
import MapFilters from "./MapFilters";
import { countryCoords } from "../services/countryCoords";
import { Loader2, Map as MapIcon, Globe } from "lucide-react";

const MapPage = () => {
  const [rawData, setRawData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    gender: "",
    roleType: "",
    voyageRole: "",
    goal: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/chingu-voyages/voyage-project-chingu-map/main/src/assets/chingu_info.json"
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setRawData(data);
      } catch (error) {
        console.error("Failed to fetch map data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filterOptions = useMemo(() => {
    const getUnique = (key) =>
      Array.from(new Set(rawData.map((d) => d[key]).filter(Boolean))).sort();

    return {
      roleTypes: getUnique("Role Type"),
      voyageRoles: getUnique("Voyage Role"),
      goals: getUnique("Goal"),
    };
  }, [rawData]);

  const groupedData = useMemo(() => {
    const filtered = rawData.filter((item) => {
      if (
        filters.gender &&
        item.Gender?.trim().toUpperCase() !== filters.gender
      )
        return false;
      if (filters.roleType && item["Role Type"] !== filters.roleType)
        return false;
      if (filters.voyageRole && item["Voyage Role"] !== filters.voyageRole)
        return false;
      if (filters.goal && item.Goal !== filters.goal) return false;
      return true;
    });

    const groups = {};
    filtered.forEach((member) => {
      let code = member["Country Code"];
      if (!code) return;
      code = code.trim().toUpperCase();
      const coordinates = countryCoords[code];
      if (!coordinates) return;

      if (!groups[code]) {
        groups[code] = {
          countryCode: code,
          countryName: member["Country name (from Country)"] || code,
          coordinates,
          members: [],
        };
      }
      groups[code].members.push(member);
    });

    return Object.values(groups);
  }, [rawData, filters]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const totalFilteredMembers = groupedData.reduce(
    (acc, curr) => acc + curr.members.length,
    0
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 relative min-h-screen">
      <div className="mb-8 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-brand-purple">
          <Globe className="w-6 h-6" />
          <span className="text-sm font-bold uppercase tracking-wider">
            Global Impact
          </span>
        </div>
        <h1 className="text-4xl font-bold text-brand-dark">Community Map</h1>
        <p className="text-gray-600 max-w-2xl text-lg">
          Visualize the distribution of Chingu members worldwide. Filter by role
          or goal to find like-minded peers in your region.
        </p>
      </div>

      {loading ? (
        <div className="w-full h-96 flex flex-col items-center justify-center gap-4 text-gray-400 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <Loader2 className="animate-spin w-10 h-10 text-brand-purple" />
          <p className="font-medium animate-pulse">
            Loading geospatial data...
          </p>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <aside className="w-full lg:w-80 flex-shrink-0 lg:sticky lg:top-8 z-10 order-2 lg:order-1">
            <MapFilters
              filters={filters}
              onChange={handleFilterChange}
              options={filterOptions}
            />

            <div className="mt-4 bg-blue-50 text-blue-800 px-4 py-3 rounded-xl text-sm font-medium flex justify-between items-center border border-blue-100">
              <span>Showing:</span>
              <span className="font-bold text-lg">
                {totalFilteredMembers} Members
              </span>
            </div>
          </aside>

          <main className="flex-grow w-full relative order-1 lg:order-2">
            <ChinguMap data={groupedData} />

            {groupedData.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center z-[500] pointer-events-none">
                <div className="bg-white/95 backdrop-blur px-8 py-6 rounded-2xl shadow-xl border border-gray-100 text-center max-w-sm mx-4">
                  <MapIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-brand-dark mb-1">
                    No Results Found
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Try adjusting your filters to see members on the map.
                  </p>
                </div>
              </div>
            )}
          </main>
        </div>
      )}
    </div>
  );
};

export default MapPage;
