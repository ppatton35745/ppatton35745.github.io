import React, { Component } from "react";
import { Container } from "reactstrap";

export default class Experience extends Component {
  render() {
    return (
      <Container id="exp" className="content-nav-link">
        <h2 className="section-head">Experience</h2>

        <h5>NASHVILLE SOFTWARE SCHOOL</h5>
        <h6>Full Stack Software Developer, 2018-present</h6>
        <p>
          Intensive full-time software development boot-camp focusing on full
          stack development fundamentals and problem solving.
        </p>
        <ul>
          <li>
            Hands on application of OOP fundamentals through group and
            individual projects reflecting real world business problems
          </li>
          <li>
            Built browser-based single page applications using React, HTML, CSS
            and jQuery
          </li>
          <li>
            Created and modified database design/content using SQL, ADO.NET, and
            ORM tooling, including exposure and experience with migrations
          </li>
          <li>Leveraged Razor for creating and editing MVC applications</li>
        </ul>

        <h5>LOMA LINDA UNIVERSITY MEDICAL CENTER</h5>
        <h6>Data Architect/Analyst, 2015-2018</h6>
        <p>
          Hired as a data analyst tasked with cost analysis and budget
          projections, promoted to data architect as knowledge of SQL and data
          modeling developed.
        </p>
        <ul>
          <li>
            Extract, transform, and load functions of operational data from
            various source systems for analytical consumption in a data
            warehouse
          </li>
          <li>
            Executed, debugged, and extended data processing routines including
            line item cost analysis, future budget projections, and budget
            variance analysis using a blend of Allscripts EPSi application
            suite, SQL Server, Power BI, and Microsoft Excel
          </li>
          <li>
            Designed and Implemented a DAX tabular cube using SQL Server
            Analysis Services to relate payroll, accounting, patient, and
            operational data in a single model leading to faster budgeting
            cycles and more accurate projections highlighting deficiencies and
            opportunity
          </li>
          <li>
            Created and maintained tables, views, and stored procedures as
            needed to reduce processing time, increase data integrity, and
            facilitate custom processes per management direction using Microsoft
            SQL Server
          </li>
        </ul>

        <h5>UNITED STATES NAVY</h5>
        <h6>Supply/Logistics, 2012-2015</h6>
        <ul>
          <li>
            Managed USS Cowpens' $450,000 monthly budget including screening all
            departmental purchase requests, determining priority of needs, and
            executing accurate procurement orders utilizing the naval supply
            requisitioning system.
          </li>
          <li>
            Produced and discussed with the Supply Officer weekly reports
            summarizing all requisitions, cancellations, and current budget
            status for review and approval by the Commanding Officer.
          </li>
        </ul>
      </Container>
    );
  }
}
