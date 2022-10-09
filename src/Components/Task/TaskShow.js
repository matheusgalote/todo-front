import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { TASK_SHOW } from "../../Helpers/api";
import useFetch from "../../Hooks/useFetch";
import style from '../../style.module.css';

const TaskShow = () => {

  const { id } = useParams();

  const { url, options } = TASK_SHOW(id);

  const { data, request, status }  = useFetch();

  useEffect(() => {
    request(url, options);
  }, []);

  return (
    <section className={`${style.container}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      { status === 200 &&
        <div>
          <h2>{data.description}</h2>
          <span>{data.createdAt}</span>
        </div>
      }
    </section>
  );
}

export default TaskShow;