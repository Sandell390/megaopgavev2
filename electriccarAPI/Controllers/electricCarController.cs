using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace electriccarAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class electricCarController : ControllerBase
    {
        static List<CarData> _cars;

        public electricCarController()
        {
            if (_cars == null)
            {
                string json = System.IO.File.ReadAllText(@"MOCK_DATA.json");
                _cars = JsonSerializer.Deserialize<List<CarData>>(json)!;
            }

        }

        [HttpGet]
        public ActionResult<IEnumerable<CarData>> GetElectricCars(int start = 0, int count = 20)
        {
            Console.WriteLine("Car Count {0}", _cars.Count);
            if (start > _cars.Count || start < 0 || count > _cars.Count || count < 0)
            {
                return BadRequest();
            }

            if (start + count > _cars.Count)
                return Ok(_cars.GetRange(start, start - _cars.Count));


            return Ok(_cars.GetRange(start, count));
        }

        [HttpGet("{id}")]
        public ActionResult<CarData> GetElectricCar(int id)
        {
            var electricCar = _cars.Where(x => x.Id == id).FirstOrDefault();

            if (electricCar == null)
            {
                return NotFound();
            }

            return electricCar;
        }

        [HttpPut("{id}")]
        public IActionResult PutElectricCar(int id, [FromBody]CarData electricCar)
        {
            if (id != electricCar.Id)
            {
                return BadRequest();
            }

            _cars[_cars.FindIndex((x) => x.Id == id)] = electricCar;

            return Ok();
        }

        [HttpPost]
        public ActionResult<CarData> PostElectricCar([FromBody]CarData electricCar)
        {
            Console.WriteLine("Posted Car");
            electricCar.Id = _cars.Count + 1;
            _cars.Add(electricCar);

            return Ok();
        }

        // DELETE: api/ElectricCars/5
        [HttpDelete("{id}")]
        public IActionResult DeleteElectricCar(int id)
        {
            var electricCar = _cars.Find(x => x.Id == id);
            if (electricCar == null)
            {
                return NotFound();
            }

            _cars.Remove(electricCar);

            return Ok();
        }
    }
}