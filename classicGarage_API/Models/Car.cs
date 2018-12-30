using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace classicGarage_API.Models
{
    public class Car
    {
        public int Id { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public int Vin { get; set; }
        public int Series { get; set; }
        public string Photo { get; set; }
        public string Bought_date { get; set; }
        public string Sell_date { get; set; }
        public int Bought_price { get; set; }
        public int Sell_price { get; set; }

        [ForeignKey("Owner")]
        public int Owner_Id { get; set; }

        public virtual ICollection<Part> Parts { get; set; }
        public virtual ICollection<Repair> Repairs { get; set; }

        public virtual Owner Owner { get; set; }
    }
}
