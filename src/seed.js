const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "navy_anchorage",
  password: process.env.DB_PASSWORD || "postgres",
  port: process.env.DB_PORT || 5432,
});

const seedData = async () => {
  try {
    // Seed School Info
    await pool.query(`
      INSERT INTO school_info (name, name_bengali, address, phone, email, website, rating, review_count, description, mission, vision, founded_year)
      VALUES (
        'Navy Anchorage School And College Chattogram',
        'নেভি এ্যাংকরেজ স্কুল এন্ড কলেজ চট্টগ্রাম',
        'Sailors Colony 2 Road, Chattogram 4218, Bangladesh',
        '+880 1769-722782',
        'info@nascc.edu.bd',
        'nascc.edu.bd',
        4.1,
        107,
        'One of the best schools in Chittagong providing quality English medium education with a focus on holistic development.',
        'To provide quality education that combines academic excellence with character development.',
        'To nurture young minds with a perfect blend of traditional values and modern educational approaches.',
        2014
      ) ON CONFLICT DO NOTHING
    `);

    // Seed Academics
    await pool.query(`
      INSERT INTO academics (title, description, age_range, features) VALUES
      ('Primary Section', 'Building strong foundations with interactive learning methods for young minds aged 5-11 years.', '5-11 years', ARRAY['Playgroup to Class 5', 'Interactive Learning', 'Activity-Based Education', 'Basic Skills Development']),
      ('Secondary Section', 'Comprehensive education for students aged 12-16 years preparing for SSC examinations.', '12-16 years', ARRAY['Class 6 to Class 10', 'Science & Business Tracks', 'Exam Preparation', 'Character Building']),
      ('Higher Secondary', 'Advanced education for students aged 17-18 years preparing for HSC examinations.', '17-18 years', ARRAY['Class 11 to Class 12', 'Science & Business Studies', 'University Preparation', 'Career Guidance'])
      ON CONFLICT DO NOTHING
    `);

    // Seed Facilities
    await pool.query(`
      INSERT INTO facilities (name, description, icon) VALUES
      ('Computer Lab', 'Modern computer lab with high-speed internet and latest software for digital literacy.', 'fa-laptop-code'),
      ('Science Lab', 'Well-equipped physics, chemistry, and biology laboratories for practical learning.', 'fa-flask'),
      ('Library', 'Extensive collection of books, journals, and digital resources for comprehensive learning.', 'fa-book-reader'),
      ('Sports Ground', 'Spacious sports facilities for cricket, football, basketball, and other outdoor activities.', 'fa-futbol'),
      ('Music & Art', 'Dedicated spaces for creative arts, music lessons, and cultural activities.', 'fa-music'),
      ('Transport', 'Safe and reliable transportation services covering major areas of Chittagong.', 'fa-bus-school')
      ON CONFLICT DO NOTHING
    `);

    // Seed Gallery
    await pool.query(`
      INSERT INTO gallery (title, image_url, category) VALUES
      ('Classroom', 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 'academic'),
      ('Students', 'https://images.unsplash.com/photo-1544531696-7613766a059d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 'students'),
      ('Education', 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 'academic'),
      ('Sports', 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 'sports'),
      ('Library', 'https://images.unsplash.com/photo-1577896337318-2869d389e2a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 'facilities'),
      ('School Building', 'https://images.unsplash.com/photo-1564951434112-64d74cc2a2d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 'campus')
      ON CONFLICT DO NOTHING
    `);

    // Seed Reviews
    await pool.query(`
      INSERT INTO reviews (reviewer_name, reviewer_type, rating, review_text) VALUES
      ('Parent Review', 'parent', 5, 'One of the best schools in Chittagong. My child has developed so much confidence since joining Navy Anchorage. The teachers are supportive and encouraging.'),
      ('Punygorrila Playz', 'student', 5, 'I love this school. It has nice teachers. Everyone is very helpful. They are not at all strict. They appreciate the students a lot. They take nice care for every student. This school is a dream for me.'),
      ('Md. Saddam Hossain', 'parent', 5, 'In the present age of globalization, communication skill in English is a must to keep pace with this trend. Hence, in response to the growing demand of English Medium School in Chittagong area, Navy Anchorage Chittagong started its journey with a vision to provide quality education.')
      ON CONFLICT DO NOTHING
    `);

    console.log("Seed data inserted successfully");
    process.exit(0);
  } catch (err) {
    console.error("Error seeding data:", err);
    process.exit(1);
  }
};

seedData();
