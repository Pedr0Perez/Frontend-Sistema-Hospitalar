import React, { useEffect, useState } from "react";
import DefaultPage from "../../../components/layout/DefaultPage";
import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import "@schedule-x/theme-default/dist/index.css";
import formatDate from "../../../utils/formatDate";

const Agenda = () => {
  const eventsService = useState(() => createEventsServicePlugin())[0];

  const dataAtual = new Date();

  const dataAmanha = new Date();
  dataAmanha.setDate(dataAmanha.getDate() + 1);

  const dataDepoisDepoisAmanha = new Date();
  dataDepoisDepoisAmanha.setDate(dataAmanha.getDate() + 2);

  const calendar = useCalendarApp({
    translations: {},
    locale: "pt-BR",
    views: [
      createViewDay(),
      createViewWeek(),
      createViewMonthGrid(),
      createViewMonthAgenda(),
    ],
    isResponsive: true,
    minDate: `${dataAtual.getFullYear()}-01-01`,
    events: [
      {
        id: "1",
        title: "Consulta",
        start: `${formatDate(dataAtual)} 02:00`,
        end: `${formatDate(dataAtual)} 02:50`,
        description: "Consulta com Mariana",
      },
      {
        id: "2",
        title: "Consulta",
        start: `${formatDate(dataAmanha)} 03:00`,
        end: `${formatDate(dataAmanha)} 03:50`,
        description: "Consulta com Mariana",
      },
      {
        id: "3",
        title: "Consulta",
        start: `${formatDate(dataAmanha)} 04:00`,
        end: `${formatDate(dataAmanha)} 04:50`,
        description: "Consulta com Mariana",
      },
      {
        id: "4",
        title: "Consulta",
        start: `${formatDate(dataDepoisDepoisAmanha)} 01:00`,
        end: `${formatDate(dataDepoisDepoisAmanha)} 01:50`,
        description: "Consulta com Mariana",
      },
      {
        id: "5",
        title: "Consulta",
        start: `${formatDate(dataDepoisDepoisAmanha)} 02:00`,
        end: `${formatDate(dataDepoisDepoisAmanha)} 02:50`,
        description: "Consulta com Mariana",
      },
      {
        id: "6",
        title: "Consulta",
        start: `${formatDate(dataDepoisDepoisAmanha)} 03:00`,
        end: `${formatDate(dataDepoisDepoisAmanha)} 03:50`,
        description: "Consulta com Mariana",
      },
      {
        id: "7",
        title: "Consulta",
        start: `${formatDate(dataDepoisDepoisAmanha)} 04:00`,
        end: `${formatDate(dataDepoisDepoisAmanha)} 04:50`,
        description: "Consulta com Mariana",
      },
    ],
    plugins: [eventsService],
  });

  useEffect(() => {
    // get all events
    eventsService.getAll();
  }, []);

  return (
    <DefaultPage title="Agenda">
      <div className="card grid">
        <div className="col-12">
          <p>Sua agenda de consultas com seus respectivos horários</p>
        </div>
      </div>
      <div id="calendar">
        <div className="card grid">
          <div className="col-12 md:col-8 lg:col-6">
            <div
              className="calendar-container"
              style={{ maxHeight: "500px", overflowY: "auto" }}
            >
              <ScheduleXCalendar calendarApp={calendar} />
            </div>
          </div>
        </div>
      </div>
    </DefaultPage>
  );
};

export default Agenda;
