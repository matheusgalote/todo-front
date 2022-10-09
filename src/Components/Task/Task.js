import React, { useEffect } from "react";
import Header from '../Header';

import style from '../../style.module.css';
import useFetch from "../../Hooks/useFetch";

import { TASKS } from "../../Helpers/api";
import Tasks from "./Tasks";

const Task = () => {

  const { url, options } = TASKS();

  const {data, request, status} =  useFetch();

  useEffect(() => {
    request(url, options);
  }, []);

  if(status === 200) {
    console.log(data)
  }

  return (
    <section className={style.container}>
      <Header />
      { status === 200 && <Tasks tasks={data} /> }
    </section>
  );
}

export default Task;