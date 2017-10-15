using Angular4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Angular4.Controllers
{
    public class TasksController : ApiController
    {
        HardcodedData data;
        public TasksController()
        {
            data = new HardcodedData();
           
        }

        [Route("api/Tasks/GetTasks/{userId}")]
        public IHttpActionResult GetTasks(int userId)
        {
            return Ok(HardcodedData.userTask.Where(u => u.UserId == userId).ToList());
        }

        [HttpPost]
        public IHttpActionResult DeleteTask(UserTask task)
        {
                HardcodedData.userTask.RemoveAll(r => r.Id == task.Id);
                return Ok(HardcodedData.userTask.Where(u => u.UserId == task.UserId).ToList());
        }
    }
}
