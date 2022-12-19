import { Typography } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";

const { Title } = Typography;

const UserInfo = ({ match }) => {
  const { users } = useSelector((state) => state.usersReducer);
  const user = users.find((user) => user._id == match.params.id);
  return (
    <div>
      <DefaultLayout>
        {user && (
          <div>
            <Title level={3}>Personal Information</Title>
            <p>
              <b>Name: </b>
              {user.firstName + " " + user.lastName}
            </p>
            <p>
              <b>Email: </b>
              {user.email}
            </p>
            <p>
              <b>Phone number: </b>
              {user.mobileNumber}
            </p>
            <p>
              <b>Address: </b>
              {user.address}
            </p>

            <hr />

            <Title level={3}>Skills</Title>
            {user.skills.map((skill) => {
              return <li>{skill}</li>;
            })}

            <hr />

            <Title level={3}>Education</Title>
            {user.education.map((education) => {
              return <li>{education}</li>;
            })}

            <hr />

            <Title level={3}>Projects</Title>
            {user.projects.map((project) => {
              return <li>{project}</li>;
            })}

            <hr />

            <Title level={3}>Experience</Title>
            {user.experience.map((experience) => {
              return <li>{experience}</li>;
            })}
          </div>
        )}
      </DefaultLayout>
    </div>
  );
};

export default UserInfo;
