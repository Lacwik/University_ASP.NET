using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using classicGarage_API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace classicGarage_API.Controllers
{
    [Route("api/parts")]
    [ApiController]
    public class PartsController : Controller
    {
        private readonly ClassicGarageContext _context;

        public PartsController(ClassicGarageContext context)
        {
            _context = context;
        }

        // GET: api/Part
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Part>>> GetParts()
        {
            return await _context.Parts.ToListAsync();
        }

        // GET: api/Part/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Part>> GetPart(int id)
        {
            var sample = await _context.Parts.FindAsync(id);

            if (sample == null)
            {
                return NotFound();
            }

            return sample;
        }

        // POST: api/Part
        [HttpPost]
        public async Task<ActionResult<Part>> PostPart(Part Part)
        {
            _context.Parts.Add(Part);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPart", new { id = Part.Id }, Part);
        }

        // PUT: api/Part/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPart(int id, Part Part)
        {
            if (id != Part.Id)
            {
                return BadRequest();
            }

            _context.Entry(Part).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/Part/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Part>> DeletePart(int id)
        {
            var Part = await _context.Parts.FindAsync(id);
            if (Part == null)
            {
                return NotFound();
            }

            _context.Parts.Remove(Part);
            await _context.SaveChangesAsync();

            return Part;
        }
    }
}