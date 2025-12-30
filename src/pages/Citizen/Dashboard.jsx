import "../../styles/dashboard.css";
import StatCard from "../../components/dashboard/StatCard";
import HeatMap from "../../components/dashboard/HeatMap";
import HeatMapfrom "../../components/dashboard/HeatMap.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">

      {/* LEFT */}
      <div className="dashboard-left">
        <BoardColumn
          title="To do"
          items={[
            "Street light not working",
            "Garbage not collected",
            "Water leakage",
          ]}
        />

        <BoardColumn
          title="Requested by Support"
          items={[
            "Road damage",
            "Drainage issue",
            "Power fluctuation",
          ]}
        />

        <div className="unassigned-card">
          <h1>7</h1>
          <p>Unassigned tickets</p>
        </div>
      </div>

      {/* CENTER */}
      <div className="dashboard-center">
        <BoardColumn
          title="In progress"
          items={[
            "Road repair – Zone 3",
            "Pipeline fix – Ward 7",
            "Transformer issue",
            "Street light upgrade",
            "Sewage overflow",
          ]}
          scroll
        />

        <div className="workers-card">
          <h3>Tickets being worked on</h3>
          <div className="workers">
            <StatMiniCard name="Sam" count="3" />
            <StatMiniCard name="Tom" count="2" />
            <StatMiniCard name="Jon" count="4" alert />
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="dashboard-right">
        <div className="done-card">
          <div>
            <h1>17</h1>
            <p>Today</p>
            <div className="progress green"></div>
          </div>
          <div>
            <h1>45</h1>
            <p>This week</p>
            <div className="progress blue"></div>
          </div>
        </div>

        <div className="overdue-card">
          <h1>3</h1>
          <p>Overdue</p>
          <span className="alert">!</span>
        </div>

        <TicketsChart />
      </div>

    </div>
  );
}
