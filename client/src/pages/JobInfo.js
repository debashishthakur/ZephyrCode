import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import { Button, Tag } from "antd";
import moment from "moment";
import { applyJob } from "../redux/actions/jobActions";

function JobInfo({ match }) {
  const { jobs } = useSelector((state) => state.jobsReducer);

  const job = jobs.find((job) => job._id == match.params.id);

  const userid = JSON.parse(localStorage.getItem("user"))._id;
  const appliedCandidates = job.appliedCandidates;

  const alreadyApplied = appliedCandidates.find(
    (candidate) => candidate.userid == userid
  );

  const dispatch = useDispatch();

  function applyNow() {
    dispatch(applyJob(job));
  }
  return (
    <div>
      <DefaultLayout>
        <div>
          <h4> {job.title}</h4>
          <p>
            {" "}
            <b>Company: </b>
            {job.company}
          </p>
          <p>
            {" "}
            <b>Description: </b> {job.fullDescription}
          </p>
          <p>
            {" "}
            <b>Skills Required: </b>
            {job.skillsRequired}
          </p>
          <p>
            {" "}
            <b>Experience: </b> {job.experience} years
          </p>
          <p>
            {" "}
            <b>Minimum Qualification: </b> {job.minimumQualification}
          </p>
          <p>
            <b>Salary Range: </b>
            {job.salaryMin} - {job.salaryMax}
          </p>
          <hr />

          <p>
            <b>Department: </b>
            {job.department}
          </p>
          <p>
            <b>Company details: </b>
            {job.companyDescription}
          </p>
          <p>
            <b>Total Candidates Applied: </b>
            {job.appliedCandidates.length}
          </p>

          <hr />

          <div className="flex justify-content-between">
            {job.postedBy == userid ? (
              <Button>
                <Link to={`/editjob/${job._id}`}>Edit Now</Link>
              </Button>
            ) : alreadyApplied ? (
              <Tag color="volcano">Already Applied</Tag>
            ) : (
              <Button onClick={applyNow} type="primary">
                Apply Now
              </Button>
            )}
            <p>
              <b>Posted on: </b>
              {moment(job.createdAt).format("MMM DD YYYY")}
            </p>
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
}

export default JobInfo;
