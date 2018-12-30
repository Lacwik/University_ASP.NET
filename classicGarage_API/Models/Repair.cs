using System.ComponentModel.DataAnnotations.Schema;

namespace classicGarage_API.Models
{
    public class Repair
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Cost { get; set; }

        [ForeignKey("Car")]
        public int Car_Id { get; set; }

        public virtual Car Car { get; set; }
    }
}
