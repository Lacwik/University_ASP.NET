using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using classicGarage_API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace classicGarage_API.Controllers
{
    [Route("api/owners")]
    [ApiController]
    public class OwnersController : Controller
    {
        private readonly ClassicGarageContext _context;

        public OwnersController(ClassicGarageContext context)
        {
            _context = context;
        }

        // GET: api/Owner
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Owner>>> GetOwners()
        {
            return await _context.Owners.ToListAsync();
        }

        // GET: api/Owner/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Owner>> GetOwner(int id)
        {
            var sample = await _context.Owners.FindAsync(id);

            if (sample == null)
            {
                return NotFound();
            }

            return sample;
        }

        // POST: api/Owner
        [HttpPost]
        public async Task<ActionResult<Owner>> PostOwner(Owner Owner)
        {
            _context.Owners.Add(Owner);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOwner", new { id = Owner.Id }, Owner);
        }

        // PUT: api/Owner/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOwner(int id, Owner Owner)
        {
            if (id != Owner.Id)
            {
                return BadRequest();
            }

            _context.Entry(Owner).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/Owner/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Owner>> DeleteOwner(int id)
        {
            var Owner = await _context.Owners.FindAsync(id);
            if (Owner == null)
            {
                return NotFound();
            }

            _context.Owners.Remove(Owner);
            await _context.SaveChangesAsync();

            return Owner;
        }
    }
}