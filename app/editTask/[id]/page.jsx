import EditTaskForm from '@/components/EditTaskForm'
import React from 'react'

const getTaskById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/task/${id}`,{
      cache: "no-store",
    });

    if(!res.ok){
      throw new Error("Failed to edit task");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function EditTask({params}) {

  const { id } = params;
  const {tasks} = await getTaskById(id);
  const {title, description} = tasks;
  
  return (
    <div>
      <EditTaskForm id={id} title={title} description={description} />
    </div>
  )
}
