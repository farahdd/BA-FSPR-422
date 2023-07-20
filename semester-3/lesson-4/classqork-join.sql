-- select * from track
-- join album on track.album_id = album.id;

-- select track.id as ID, album.id as Album_Id, track.title as track_title, album.title as album_title  from track
-- join album on track.album_id = album.id;


-- select track.id as ID, album.id as Album_Id, track.title as track_title, album.title as album_title  from track
-- left join album on track.album_id = album.id;

-- insert into album
-- values (20, 'Two Men with the Blues',	'Willie Nelson and Wynton Marsalis',	'Blue Note',	2008-07-08)

-- select track.id as ID, album.id as Album_Id, track.title as track_title, album.title as album_title  from track
-- left join album on track.album_id = album.id;

select * from album
UNION
select * from track;