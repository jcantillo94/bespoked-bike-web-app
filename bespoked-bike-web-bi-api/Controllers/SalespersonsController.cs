using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using bespoked_bike_web_bi_api.Models;

namespace bespoked_bike_web_bi_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalespersonsController : ControllerBase
    {
        private readonly BespokedBikesContext _context;

        public SalespersonsController(BespokedBikesContext context)
        {
            _context = context;
        }

        // GET: api/Salespersons
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Salesperson>>> GetSalespeople()
        {
          if (_context.Salespeople == null)
          {
              return NotFound();
          }
            return await _context.Salespeople.ToListAsync();
        }

        // GET: api/Salespersons/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Salesperson>> GetSalesperson(int id)
        {
          if (_context.Salespeople == null)
          {
              return NotFound();
          }
            var salesperson = await _context.Salespeople.FindAsync(id);

            if (salesperson == null)
            {
                return NotFound();
            }

            return salesperson;
        }

        // PUT: api/Salespersons/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSalesperson(int id, Salesperson salesperson)
        {
            if (id != salesperson.SalespersonId)
            {
                return BadRequest();
            }

            _context.Entry(salesperson).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SalespersonExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Salespersons
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Salesperson>> PostSalesperson(Salesperson salesperson)
        {
          if (_context.Salespeople == null)
          {
              return Problem("Entity set 'BespokedBikesContext.Salespeople'  is null.");
          }
            _context.Salespeople.Add(salesperson);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSalesperson", new { id = salesperson.SalespersonId }, salesperson);
        }

        // DELETE: api/Salespersons/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSalesperson(int id)
        {
            if (_context.Salespeople == null)
            {
                return NotFound();
            }
            var salesperson = await _context.Salespeople.FindAsync(id);
            if (salesperson == null)
            {
                return NotFound();
            }

            _context.Salespeople.Remove(salesperson);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SalespersonExists(int id)
        {
            return (_context.Salespeople?.Any(e => e.SalespersonId == id)).GetValueOrDefault();
        }
    }
}
