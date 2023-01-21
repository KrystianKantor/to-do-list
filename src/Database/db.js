import Dexie from "dexie";

export const db = new Dexie("tasksDatabase");

db.version(1).stores({
  tasks:
    "&task_id, task_title, task_date, task_time, task_important, task_done, date_done, time_done",
});

async function addTaskDB(newTask) {
  try {
    await db.tasks.add({
      task_id: newTask.task_id,
      task_title: newTask.task_title,
      task_date: newTask.task_date,
      task_time: newTask.task_time,
      task_important: newTask.task_important,
      task_done: newTask.task_done,
      date_done: "",
      time_done: "",
    });
  } catch (error) {
    console.warn("ADD TASK FAILED");
  }
}

async function clearAllDB() {
  try {
    await db.tasks.clear();
  } catch (error) {
    console.warn("CLEAR DB FAILED");
  }
}

async function deleteTaskDB(id) {
  try {
    await db.tasks.delete(id);
  } catch (error) {
    console.warn("REMOVE FROM DB FAILED");
  }
}

async function updateTaskDB({ id, date, time }) {
  try {
    await db.tasks.update(id, {
      task_done: true,
      date_done: date,
      time_done: time,
    });
  } catch (error) {
    console.warn("UPDATE TASK FAILED");
  }
}

export { addTaskDB, clearAllDB, deleteTaskDB, updateTaskDB };
