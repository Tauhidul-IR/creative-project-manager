import Gantt from "./Gantt";

const data = {
    data: [
      { id: 1, text: 'Task #1', start_date: '22-01-2023', duration: 3, progress: 0.6 },
      { id: 2, text: 'Task #2', start_date: '12-01-2023', duration: 3, progress: 0.4 },
      { id: 3, text: 'Task #3', start_date: '12-01-2023', duration: 3, progress: 0.4 }
    ]
  };
 

const AddGantt = () => {
 

  if(process.browser){
    console.log(window.location.pathname);
  }


    return (
        <div className="gantt-container mt-20">
          <Gantt tasks ={data}  />
        </div>
    );
};

export default AddGantt;

