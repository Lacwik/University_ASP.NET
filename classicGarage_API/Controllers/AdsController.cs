using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using classicGarage_API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace classicGarage_API.Controllers
{
    [Route("api/ads")]
    [ApiController]
    public class AdsController : Controller
    {
        private readonly ClassicGarageContext _context;

        public AdsController(ClassicGarageContext context)
        {
            _context = context;
        }

        // GET: api/Ad
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ad>>> GetAds()
        {
            return await _context.Ads.ToListAsync();
        }

        // GET: api/Ad/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ad>> GetAd(int id)
        {
            var sample = await _context.Ads.FindAsync(id);

            if (sample == null)
            {
                return NotFound();
            }

            return sample;
        }

        // POST: api/Ad
        [HttpPost]
        public async Task<ActionResult<Ad>> PostAd(Ad Ad)
        {
            _context.Ads.Add(Ad);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAd", new { id = Ad.Id }, Ad);
        }

        // PUT: api/Ad/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAd(int id, Ad Ad)
        {
            if (id != Ad.Id)
            {
                return BadRequest();
            }

            _context.Entry(Ad).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/Ad/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Ad>> DeleteAd(int id)
        {
            var Ad = await _context.Ads.FindAsync(id);
            if (Ad == null)
            {
                return NotFound();
            }

            _context.Ads.Remove(Ad);
            await _context.SaveChangesAsync();

            return Ad;
        }
    }
}