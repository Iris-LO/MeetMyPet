# MLD

USER ( <br>
id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, <br>
first_name TEXT NOT NULL UNIQUE, <br>
city TEXT NOT NULL, <br>
address TEXT NOT NULL, <br>
mail TEXT NOT NULL UNIQUE, <br>
password TEXT NOT NULL, <br>
created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), <br>
updated_at TIMESTAMPTZ, <br>
animal_id INT NOT NULL REFERENCES animal(id) <br>
); <br>

GROUP ( <br>
id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, <br>
name TEXT NOT NULL, <br>
latitude FLOAT8 NOT NULL, <br>
longitude FLOAT8 NOT NULL, <br>
city TEXT NOT NULL, <br>
address TEXT NOT NULL, <br>
country TEXT NOT NULL, <br>
description TEXT NOT NULL, <br>
created_by INT NOT NULL UNIQUE REFERENCES animal(id), <br>
chatroom_id UUID NOT NULL, <br>
created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), <br>
updated_at TIMESTAMPTZ <br>
); <br>

MESSAGE ( <br>
id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, <br>
content TEXT NOT NULL, <br>
send_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), <br>
send_by INT NOT NULL REFERENCES animal(id), <br>
send_to  INT NOT NULL REFERENCES chatroom(id), <br>
created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), <br>
updated_at TIMESTAMPTZ <br>
); <br>

ANIMAL ( <br>
id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, <br>
name TEXT NOT NULL, <br>
age INT NOT NULL, <br>
sex TEXT NOT NULL, <br>
description TEXT NOT NULL, <br>
breed TEXT NOT NULL, <br>
size TEXT NOT NULL, <br>
image TEXT NOT NULL, <br>
chat_id UUID NOT NULL, <br>
created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), <br>
updated_at TIMESTAMPTZ, <br>
user_id INT NOT NULL REFERENCES user(id) <br>
); <br>

AUTHORIZATION ( <br>
id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, <br>
cgu BOOLEAN NOT NULL DEFAULT FALSE, <br>
cookies BOOLEAN NOT NULL DEFAULT FALSE, <br>
localisation BOOLEAN NOT NULL DEFAULT FALSE, <br>
user_id INT NOT NULL REFERENCES user(id), <br>
created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), <br>
updated_at TIMESTAMPTZ <br>
); <br>

LIST ( <br>
id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, <br>
created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), <br>
updated_at TIMESTAMPTZ, <br>
group_id INT NOT NULL REFERENCES group(id), <br>
animal_id INT NOT NULL REFERENCES animal(id) <br>
);
