"use client";
import React, { useState, useEffect } from "react";
import { format, addMonths, differenceInMonths } from "date-fns";

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 0, 1));
  const [users, setUsers] = useState<
    {
      username: string;
      points: number;
      dateAdded: Date;
      remaining_points: number;
    }[]
  >([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [expiredPoints, setExpiredPoints] = useState(0);
  const [usedPoints, setUsedPoints] = useState(0);

  useEffect(() => {
    updatePoints();
  }, [currentDate, users]);

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const handleAddPerson = () => {
    const newUser = {
      username: `User ${users.length + 1}`,
      points: 1000,
      remaining_points: 1000,
      dateAdded: currentDate,
    };
    setUsers([...users, newUser]);
  };

  const handleSpending = () => {
    let remainingPointsToDeduct = 750;
    let updatedUsers = [...users];
    let totalAvailablePoints = users.reduce(
      (sum, user) =>
        sum +
        (differenceInMonths(currentDate, user.dateAdded) < 3
          ? user.remaining_points
          : 0),
      0
    );

    if (totalAvailablePoints < remainingPointsToDeduct) {
      alert("You don't have enough points");
      return;
    }

    updatedUsers = updatedUsers.map((user) => {
      if (
        differenceInMonths(currentDate, user.dateAdded) < 3 &&
        remainingPointsToDeduct > 0
      ) {
        if (user.remaining_points > remainingPointsToDeduct) {
          const deductedPoints = remainingPointsToDeduct;
          remainingPointsToDeduct = 0;
          return {
            ...user,
            remaining_points: user.remaining_points - deductedPoints,
          };
        } else {
          remainingPointsToDeduct -= user.remaining_points;
          return { ...user, remaining_points: 0 };
        }
      }
      return user;
    });

    setUsers([
      ...updatedUsers,
      {
        username: `Spending`,
        points: -750,
        dateAdded: currentDate,
        remaining_points: 0,
      },
    ]);
    setUsedPoints(usedPoints + 750);
  };

  const updatePoints = () => {
    const validPoints = users
      .filter((user) => differenceInMonths(currentDate, user.dateAdded) < 3)
      .reduce((sum, user) => sum + user.remaining_points, 0);

    const expiredPoints = users
      .filter((user) => differenceInMonths(currentDate, user.dateAdded) >= 3)
      .reduce((sum, user) => sum + user.remaining_points, 0);

    setTotalPoints(validPoints);
    setExpiredPoints(expiredPoints);
  };

  return (
    <div className="mt-36 ml-40">
      <label>{format(currentDate, "MMMM yyyy")}</label>
      <button
        onClick={handleNextMonth}
        className="bg-primary-500 px-2 py-1 text-white rounded-lg ml-2"
      >
        Next Month
      </button>

      <table className="border mt-10">
        <thead>
          <tr>
            <th className="px-2">Username</th>
            <th className="px-2">Month</th>
            <th className="px-2">Points</th>
            <th className="px-2">Remaining Points</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="px-2">{user.username}</td>
              <td className="px-2">{format(user.dateAdded, "MMMM yyyy")}</td>
              <td className="px-2">{user.points}</td>
              <td className="px-2">{user.remaining_points}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <label className="mt-8 block">Total Points: {totalPoints}</label>
      <label className="mt-8 block">Expired Points: {expiredPoints}</label>
      <label className="mt-8 block">Used Points: {usedPoints}</label>

      <button
        className="bg-primary-500 px-2 py-1 text-white rounded-lg ml-2 mt-10"
        onClick={handleAddPerson}
      >
        Add Person
      </button>
      <button
        className="bg-red-500 px-2 py-1 text-white rounded-lg ml-2 mt-10"
        onClick={handleSpending}
      >
        Spending
      </button>
    </div>
  );
};

export default App;
