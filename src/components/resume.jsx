import React, {Component} from 'react'

export default class CV extends Component{
    render(){
        return(
        <div>    
        <section id="resume">
            <div className="row education">
              <div className="three columns header-col">
                <h1><span>Education</span></h1>
              </div>
              <div className="nine columns main-col">
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Seminole State College</h3>
                    <p className="info">B.S. Information Systems <span>•</span> <em className="date">April 2019</em></p>
                    <p>
                      Course work including: Project Management for IT/Technical projects, programming methodology, mobile application development, web app development,
                      relational database design and administration, computer operating systems, and networking.
                    </p>
                  </div>
                </div> {/* item end */}
              </div> {/* main-col end */}
            </div> {/* End Education */}
            {/* Work
           ----------------------------------------------- */}
            <div className="row work">
              <div className="three columns header-col">
                <h1><span>Work</span></h1>
              </div>
              <div className="nine columns main-col">
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Westgate Resorts</h3>
                    <p className="info">Data and Reporting Analyst <span>•</span> <em className="date">July 2018 - Present</em></p>
                    <p>
                      Resident Data Guru. Works with executives, directors, and managers to identify data needs across the organization.
                      Performs data discovery and design process to convert operational data to analytical insights with tools like Alteryx and Tableau.
                      Provide training to more junior analysts on SQL, Python, data integration processes, and data visualization best practices.
                    </p>
                  </div>
                </div> {/* item end */}
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Black Knight</h3>
                    <p className="info">Data Analyst I <span>•</span> <em className="date">October 2017 - July 2018</em></p>
                    <p>
                      Create custom SQL scripts to determine data quality and correct any data issues. Create reports for data defects and 
                      inform team of any trend data quality issues. Utilize C# to create custom programs to assist analysts with common file issues.
                      Assist and train more junior analysts with SQL and data quality methodologies. Lead the technical documentation effort for the Maitland office.
                    </p>
                  </div>
                </div> {/* item end */}
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Alight Solutions (formerly Aon Hewitt)</h3>
                    <p className="info">Programmer Analyst <span>•</span> <em className="date">July 2016 - September 2017</em></p>
                    <p>
                      Supporting ongoing and implementation work for over 80 clients in the enterprise health and welfare benefits division.
                      Design new JCL/SAS to implement new processes or client requests such as reporting or transactions. Work with internal
                      and external teams to gather requirement for ongoing and new implementation of SAS/SQL reports and transactions.
                      Participate in efficiency reviews for existing code and code reviews for team members. Led SQL query efficiency project
                      to reduce CPU use within the entire division.
                    </p>
                  </div>
                </div> {/* item end */}
                <div className="row item">
                  <div className="twelve columns">
                    <h3>Alight Solutions (formerly Aon Hewitt)</h3>
                    <p className="info">Benefit Specialist<span>•</span> <em className="date">April 2015 - July 2016</em></p>
                    <p>
                      Work with internal and external teams to ensure information regarding benefit plans is accurate and training 
                      for new hires is up to date with current client plans. Understand and able to educate others regarding plan
                      information and client requirements for benefit plans such as employer pension or 401k plans. Work with other
                      specialists to ensure timely resolution of outstanding benefit information requests and analyze trends in requests.
                    </p>
                  </div>
                </div> {/* item end */}
              </div> {/* main-col end */}
            </div> {/* End Work */}
            {/* Skills
           ----------------------------------------------- */}
            <div className="row skill">
              <div className="three columns header-col">
                <h1><span>Skills</span></h1>
              </div>
              <div className="nine columns main-col">
                <p>
                  Below are just some skills I am most often asked about. For a complete list see my LinkedIn via the link at the top and bottom of this site.
                </p>
                <div className="bars">
                  <ul className="skills">
                    <li><span className="bar-expand data" /><em>Data Analysis</em></li>
                    <li><span className="bar-expand sql" /><em>SQL Queries</em></li>
                    <li><span className="bar-expand alteryx" /><em>Alteryx</em></li>
                    <li><span className="bar-expand tableau" /><em>Tableau</em></li>
                    <li><span className="bar-expand etl" /><em>ETL Processes</em></li>
                    <li><span className="bar-expand python" /><em>Python</em></li>
                  </ul>
                </div>
              </div>
            </div>
        </section>
        </div>
        )
    }
}