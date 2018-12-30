using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace classicGarage_API.Models
{
    public class Owner
    {
        public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public int Phone { get; set; }
        public string Email { get; set; }

        public virtual ICollection<Car> Cars { get; set; }
        public virtual ICollection<Ad> Ads { get; set; }
    }
}
