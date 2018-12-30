using System.ComponentModel.DataAnnotations.Schema;

namespace classicGarage_API.Models
{
    public class Ad
    {
        public int Id { get; set; }
        public int Car_id { get; set; }
        public bool Active { get; set; }

        [ForeignKey("Owner")]
        public int Owner_Id { get; set; }

        public virtual Owner Owner { get; set; }
    }
}
