using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using classicGarage_API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace classicGarage_API.Controllers
{
    [Route("api/repairs")]
    [ApiController]
    public class RepairsController : Controller
    {
        private readonly ClassicGarageContext _context;

        public RepairsController(ClassicGarageContext context)
        {
            _context = context;
        }

        // GET: api/Repair
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Repair>>> GetRepairs()
        {
            return await _context.Repairs.ToListAsync();
        }

        // GET: api/Repair/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Repair>> GetRepair(int id)
        {
            var sample = await _context.Repairs.FindAsync(id);

            if (sample == null)
            {
                return NotFound();
            }

            return sample;
        }

        // POST: api/Repair
        [HttpPost]
        public async Task<ActionResult<Repair>> PostRepair(Repair Repair)
        {
            _context.Repairs.Add(Repair);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRepair", new { id = Repair.Id }, Repair);
        }

        // PUT: api/Repair/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRepair(int id, Repair Repair)
        {
            if (id != Repair.Id)
            {
                return BadRequest();
            }

            _context.Entry(Repair).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/Repair/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Repair>> DeleteRepair(int id)
        {
            var Repair = await _context.Repairs.FindAsync(id);
            if (Repair == null)
            {
                return NotFound();
            }

            _context.Repairs.Remove(Repair);
            await _context.SaveChangesAsync();

            return Repair;
        }
    }
}