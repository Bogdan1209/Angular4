﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular4.Models
{
    public class UserTask
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string TaskName { get; set; }
        public string Description { get; set; }
        public string ClientAddress { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
    }
}