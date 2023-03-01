import React, { useState } from "react";
import styled from "styled-components";
import moment, { Moment } from "moment";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Day = styled.div`
  flex: 1 0 14.285714%;
  padding: 10px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  text-align: center;
`;

const Header = styled.h2`
  text-align: center;
`;

const Button = styled.button`
  margin: 0 5px;
`;

type Props = {
  date: Moment;
  onDateChange: (date: Moment) => void;
};

const Calendar: React.FC<Props> = ({ date, onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState<Moment | null>(null);

  const handleDayClick = (day: Moment) => {
    setSelectedDate(day);
  };

  const handleMonthChange = (value: number) => {
    onDateChange(moment(date).add(value, "months"));
    setSelectedDate(null);
  };

  const renderDays = () => {
    const startOfMonth = moment(date).startOf("month").startOf("week");
    const endOfMonth = moment(date).endOf("month").endOf("week");
    const days: Moment[] = [];
    let day = startOfMonth;
    while (day.isBefore(endOfMonth)) {
      days.push(day);
      day = moment(day).add(1, "day");
    }
    return days.map((day) => (
      <Day
        key={day.format("DD/MM/YYYY")}
        onClick={() => handleDayClick(day)}
        selected={selectedDate?.isSame(day)}
      >
        {day.format("D")}
      </Day>
    ));
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <Button onClick={() => handleMonthChange(-1)}>&lt;</Button>
        <Header>{date.format("MMMM YYYY")}</Header>
        <Button onClick={() => handleMonthChange(1)}>&gt;</Button>
      </div>
      <Container>{renderDays()}</Container>
    </>
  );
};

export default Calendar;
