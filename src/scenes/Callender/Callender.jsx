import React, { useState } from "react";
import Header from "../../components/Header";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import { List, ListItem, ListItemText } from "@mui/material";
import interactionPlugin from "@fullcalendar/interaction";
const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState([]);

  const handelDataclick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const callenderApi = selected.view.calendar;
    callenderApi.unselect();
    if (title) {
      callenderApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };
  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  };

  return (
    <section>
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

      <div className="flex justify-between gap-4">
        <div className="dark:bg-slate-800 basis-1/6 dark:text-white p-4 ">
          <p className=" text-center font-semibold">EVENT</p>
          <List className="gap-2 flex flex-col">
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                className="rounded-sm  bg-green-700 gap-2"
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <p>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  }
                />
              </ListItem>
            ))}
          </List>
        </div>
        <div
          className="h-[75vh] basis-10/12 dark:bg-slate-800 [&_.fc]:dark:text-white 
         [&_.fc-list-day-cushion]:dark:!bg-slate-800
         "
        >
          <FullCalendar
            height={"75vh"}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handelDataclick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2024-04-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2024-04-28",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
