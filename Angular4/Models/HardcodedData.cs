using System;
using System.Collections.Generic;

namespace Angular4.Models
{
    public class HardcodedData
    {
        public List<User> users = new List<User>
        {
            new User { Id = 1, FirstName = "Mitchell", LastName = "Jackson", Address = "123 Billie Jean St.", City = "California", Number = new List<string>{ "5553429854", "5553421112"}},
            new User { Id = 2, FirstName = "Homer", LastName = "Simpson", Address = "742 Evergreen Terrace", City = "Springfield", Number = new List<string>{"5559877853", "5553535800", "5551512426" } },
            new User { Id = 3, FirstName = "Usain", LastName = "Bolt", Address = "5 Argentina St.", City = "Sherwood", Number = new List<string>{"5550009874", "5551819286" } },
            new User { Id = 4, FirstName = "Jack", LastName = "London", Address = "33 Gold St.", City = "Klondike", Number = new List<string>{ "5555321346", "5559871236"}},
            new User { Id = 5, FirstName = "Mikhail", LastName = "Lermontov ", Address = "43 Poet's soul St.", City = "Moscow", Number = new List<string>{"5554327478"} },
            new User { Id = 6, FirstName = "Test", LastName = "Bot", Address = "1337 This St.", City = "Test Town", Number = new List<string>{"5550000000"} }
        };

        //make static for data don't reset after reload a page
        public static List<UserTask> userTask = new List<UserTask>
        {
            new UserTask {Id = 1, UserId = 1, TaskName = "Visit McDonald's", Description = "Buy chicken nuggets",  ClientAddress = "2 Second St., California", StartTime = new DateTime(2012,10,23, 10,15,00), EndTime = new DateTime(2012, 10, 23, 11,00,00)},
            new UserTask { Id = 2, UserId = 1, TaskName = "Become white", Description = "I'll be cool", ClientAddress = "14 This St., New Yourk", StartTime = new DateTime(1996,4,1,10,00,00), EndTime = new DateTime(1999, 7, 15, 18,00,00)},
            new UserTask {Id = 3, UserId = 2, TaskName = "Go to Moe's bar", Description = "Call Lenny and Kark", ClientAddress = "532 Evergreen Terrace, Springfield", StartTime = new DateTime(2017, 8,1,18,30,00), EndTime = new DateTime(2017, 8, 1, 23,25,00)},
            new UserTask {Id = 4, UserId = 2, TaskName = "Go to work", Description = "Do it for her", ClientAddress = "115 Roger St., Springfield", StartTime = new DateTime(2017, 12,31,9,00,00), EndTime = new DateTime(2017,12,31,18,00,00)},
            new UserTask { Id = 5, UserId = 3, TaskName = "Win a rice", Description = "It will be easy", ClientAddress = "44 Titem Sr., Sherwood", StartTime = new DateTime(2017, 3,1,15,00,00), EndTime = new DateTime(2017,3,1,15,01,00)},
            new UserTask {Id= 6, UserId = 4, TaskName = "Get a gold", Description = "I'll find Eldorado", ClientAddress = "Eldorado", StartTime = new DateTime(1896, 11, 1, 6,0,0), EndTime = new DateTime(1897,2,28,12,0,0)},
            new UserTask{Id = 7, UserId = 5, TaskName = "Trevel to Novgorod", Description = "Maybe write something", ClientAddress = "23 Lekonskaya, Novgorod", StartTime = new DateTime(1837,6,12,12,15,00), EndTime = new DateTime(1838,2,12,13,15,00)},
            new UserTask{Id = 8, UserId = 6, TaskName = "Test", Description = "Test", ClientAddress = "Test", StartTime = DateTime.Now, EndTime = DateTime.Now},
            new UserTask{Id = 8, UserId = 6, TaskName = "Test", Description = "Test", ClientAddress = "Test", StartTime = DateTime.Now, EndTime = DateTime.Now},
            new UserTask{Id = 8, UserId = 6, TaskName = "Test", Description = "Test", ClientAddress = "Test", StartTime = DateTime.Now, EndTime = DateTime.Now}

        };
    }
}