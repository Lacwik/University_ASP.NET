using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using classicGarage_API.Models;
using Microsoft.EntityFrameworkCore;
using System.Web.Http.Cors;

namespace classicGarage_API.Controllers
{
    [Route("api/cars")]
    [ApiController]
    public class CarsController : Controller
    {
        private readonly ClassicGarageContext _context;

        public CarsController(ClassicGarageContext context)
        {
            _context = context;
        }

        // GET: api/Car
        [HttpGet]
        [DisableCors]
        public async Task<ActionResult<IEnumerable<Car>>> GetCars()
        {
            return await _context.Cars.ToListAsync();
        }

        // GET: api/Car/5
        [HttpGet("{id}")]
        [DisableCors]
        public async Task<ActionResult<Car>> GetCar(int id)
        {
            var sample = await _context.Cars.FindAsync(id);

            if (sample == null)
            {
                return NotFound();
            }

            return sample;
        }

        // POST: api/Car
        [HttpPost]
        [DisableCors]
        public async Task<ActionResult<Car>> PostCar(Car car)
        {
            _context.Cars.Add(car);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCar", new { id = car.Id }, car);
        }

        // PUT: api/Car/5
        [HttpPut("{id}")]
        [DisableCors]
        public async Task<IActionResult> PutCar(Car car)
        {
            _context.Entry(car).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/Car/5
        [HttpDelete("{id}")]
        [DisableCors]
        public async Task<ActionResult<Car>> DeleteCar(int id)
        {
            var car = await _context.Cars.FindAsync(id);
            if (car == null)
            {
                return NotFound();
            }

            _context.Cars.Remove(car);
            await _context.SaveChangesAsync();

            return car;
        }
    }
}
