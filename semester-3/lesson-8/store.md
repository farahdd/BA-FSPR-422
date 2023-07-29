
Table store {
  id integer [pk]   
  name varchar(50)
  address varchar(100)
  phone varchar(100)
  map_link varchar(100)
  description varchar(200)
  start_time timestamp
  end_time timestamp
  categories varchar(30) [ref: < category.id]
}

Table category {
  id integer [pk]
  name varchar(50)
  description varchar(50)
}

Table product {
  id integer [pk]
  name varchar(100)
  desciption varchar(200)
  created_at timestamp
  price money
  rating decimal
  company_name varchar(50)
  quantity decimal
  review varchar(50) [ref: < reviews.id]
  // category_id
  // seller_id 

}

Ref categories_products: category.id <> product.id
Ref products_sellers: seller.id <> product.id 

Table seller {
  id integer [pk]
  first_name varchar(50) 
  last_name varchar(50)
  age integer
  rating decimal
  work_start_time timestamp  
  work_end_time timestamp
  trading_exp varchar(20)
  password varchar(20)
  email varchar(100)
  date_of_birth date
}

Table purchase {
  id integer [pk]   
  custimer_id int [ref: > customer.id]
}

Table sell {
  id integer [pk]   

}

Table manufacturer {
  id integer [pk]   
}

Ref products_manufacturers: manufacturer.id <> product.id 

Table customer {
  id integer [pk]   
  name varchar(30)
  email varchar(30) [unique]
  password varchar(15) [unique]
}

table card {
 number integer [pk]
 password integer
 custimer_id int [ref: > customer.id]
}

Table bucket {
  id integer [pk]   
  custimer_id int [ref: - customer.id]
  quantity integer
}

Table reviews {
  id integer [pk]   
  author varchar(30)
  date date
  rating decimal
  message text
}