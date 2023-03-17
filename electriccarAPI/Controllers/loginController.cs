using Microsoft.AspNetCore.Mvc;

namespace electriccarAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        static List<User> users = new List<User>()
        {
            new User("Kage","Muffin123","ADMIN"),
            new User("tcroxon1","xekY6oz0eu","IT"),
            new User("wbloxsome5","x617YdzgCh","USER"),
            new User("amarking8","e8l2GG","IT"),
            new User("mbultitudeg","BVi1428W","ADMIN"),
            new User("acawseo","TH3hK6CAzOr","USER"),
            new User("hmcloughlinq","4DWPY8","USER"),
            new User("rpinderv","IdlqqzC0zYy9","HR"),
        };

        public LoginController(){

        }

        [HttpPost]
        public IActionResult Login(string username, string password)
        {
            User user = users.FirstOrDefault(x => x.Username == username)!;

            if (user == null)
            {
               Console.WriteLine("User not found");

                return NotFound("User not found");
            }

            if (user.Password!= password)
            {
                Console.WriteLine("User password is incorrect");

                return Unauthorized("Invalid password");
            }

            Console.WriteLine("User logged in");
            return Accepted(user);

        }
    }
}