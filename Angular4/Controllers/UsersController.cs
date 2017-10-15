using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Angular4.Models;

namespace Angular4.Controllers
{
    public class UsersController : ApiController
    {
        HardcodedData data;
        public UsersController()
        {
            data = new HardcodedData();
        }


        [HttpPost]
        public IHttpActionResult GetUsers([FromBody]FilterParameters filter)
        {
           if(filter.City != "")
            {
                var temp = data.users.Where(u => u.City == filter.City);
                temp.ToList();
                temp.Where(u => u.FirstName.ToLower().Contains(filter.Name.ToLower())).ToList();
                return Ok(temp);
            }
           if(filter.Name != "")
            {
                var temp = data.users.Where(n => n.FirstName.ToLower().Contains(filter.Name.ToLower())).ToList();
                return Ok(temp);
            }
            return Ok(data.users);
        }

        public IHttpActionResult GetUsers()
        {
            return Ok(data.users);
        }

        public IHttpActionResult GetCities()
        {
            return Ok(data.users.Select(c => c.City).Distinct().ToList());
        }
    }
}
