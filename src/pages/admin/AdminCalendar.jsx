import { useEffect, useMemo, useState } from "react";
import { getAdminCalendarApi } from "../../api/admin.api";

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}
function endOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}
function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}
function sameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export default function AdminCalendar() {
  const [events, setEvents] = useState([]);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);

  const [current, setCurrent] = useState(new Date());

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setErr("");

        const res = await getAdminCalendarApi();
        setEvents(res.data.calendar || []);
      } catch (e) {
        setErr(e?.response?.data?.message || "Failed to load calendar");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const days = useMemo(() => {
    const start = startOfMonth(current);
    const end = endOfMonth(current);

    // calendar grid should start from Sunday
    const gridStart = addDays(start, -start.getDay());
    // end should end on Saturday
    const gridEnd = addDays(end, 6 - end.getDay());

    const result = [];
    let d = gridStart;
    while (d <= gridEnd) {
      result.push(new Date(d));
      d = addDays(d, 1);
    }
    return result;
  }, [current]);

  const bookingsByDay = useMemo(() => {
    const map = new Map();

    events.forEach((ev) => {
      const start = new Date(ev.start);
      const end = new Date(ev.end);

      // add each day between start and end (exclusive end)
      let d = new Date(start);
      while (d < end) {
        const key = d.toISOString().slice(0, 10);
        const list = map.get(key) || [];
        list.push(ev);
        map.set(key, list);
        d = addDays(d, 1);
      }
    });

    return map;
  }, [events]);

  const monthLabel = current.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const goPrev = () =>
    setCurrent(new Date(current.getFullYear(), current.getMonth() - 1, 1));
  const goNext = () =>
    setCurrent(new Date(current.getFullYear(), current.getMonth() + 1, 1));

  if (loading) return <div>Loading calendar...</div>;
  if (err) return <div className="text-red-600">{err}</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-bold">Admin Calendar</h1>

        <div className="flex items-center gap-2">
          <button
            onClick={goPrev}
            className="px-3 py-2 border rounded-lg hover:bg-gray-50"
          >
            Prev
          </button>
          <div className="font-semibold">{monthLabel}</div>
          <button
            onClick={goNext}
            className="px-3 py-2 border rounded-lg hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      </div>

      {/* Days header */}
      <div className="grid grid-cols-7 bg-gray-100 rounded-t-xl border">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="p-3 font-semibold text-sm text-gray-600">
            {d}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 border border-t-0 rounded-b-xl overflow-hidden bg-white">
        {days.map((d) => {
          const key = d.toISOString().slice(0, 10);
          const list = bookingsByDay.get(key) || [];

          const isCurrentMonth = d.getMonth() === current.getMonth();
          const isToday = sameDay(d, new Date());

          return (
            <div
              key={key}
              className={`min-h-[120px] border-t border-l p-2 ${
                isCurrentMonth ? "" : "bg-gray-50 text-gray-400"
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`text-sm font-semibold ${
                    isToday ? "text-white bg-black px-2 py-0.5 rounded" : ""
                  }`}
                >
                  {d.getDate()}
                </div>
                <div className="text-xs text-gray-500">{list.length}</div>
              </div>

              <div className="mt-2 space-y-1">
                {list.slice(0, 3).map((ev) => (
                  <div
                    key={ev.bookingId}
                    className="text-xs p-1 rounded bg-green-100 text-green-700"
                    title={`${ev.bookingCode} - ${ev.hotel} - ${ev.room}`}
                  >
                    {ev.hotel} • {ev.room}
                  </div>
                ))}

                {list.length > 3 && (
                  <div className="text-xs text-gray-500">
                    +{list.length - 3} more
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
