using Microsoft.EntityFrameworkCore;

namespace classicGarage_API.Models
{
    public class ClassicGarageContext : DbContext
    {
        public ClassicGarageContext(DbContextOptions<ClassicGarageContext> options)
            : base(options)
        {
        }

        public DbSet<Car> Cars { get; set; }
        public DbSet<Owner> Owners { get; set; }
        public DbSet<Part> Parts { get; set; }
        public DbSet<Repair> Repairs { get; set; }
        public DbSet<Ad> Ads { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
