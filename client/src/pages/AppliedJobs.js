import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Typography, Table } from "antd";
import { useSelector } from "react-redux";

const { Title } = Typography;

function AppliedJobs() {
  const { jobs } = useSelector((state) => state.jobsReducer);

  const user = JSON.parse(localStorage.getItem("user"));

  const userAppliedJobs = [];

  for (var job of jobs) {
    var appliedCandidates = job.appliedCandidates;

    var temp = appliedCandidates.find(
      (candidate) => candidate.userid == user._id
    );

    if (temp) {
      var obj = {
        title: job.title,
        company: job.company,
        appliedDate: temp.appliedDate,
      };

      userAppliedJobs.push(obj);
    }
  }

  const columns = [
    {
      title: "Job Title",
      dataIndex: "title",
    },
    {
      title: "Company",
      dataIndex: "company",
    },
    {
      title: "Applied Date",
      dataIndex: "appliedDate",
    },
  ];

  return (
    <div>
      <DefaultLayout>
        <Title level={3}>Applied Jobs</Title>
        <Table columns={columns} dataSource={userAppliedJobs} />
      </DefaultLayout>
    </div>
  );
}

export default AppliedJobs;
