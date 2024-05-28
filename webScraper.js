function getSongByTitleAndArtist(title, artist) {
  return $.ajax({
      type: "GET",
      url: "https://itunes.apple.com/search?term=" + title + " " + artist + "&media=music&entity=song&limit=5",
      dataType: "json",
      success: function(response) {
          if (response.resultCount > 0) {

              var song = response.results[0].trackName;
              var artist = response.results[0].artistName;
              var album = response.results[0].collectionName;
              var albumArt = response.results[0].artworkUrl100;
              var previewUrl = response.results[0].previewUrl;
              var songLink = response.results[0].trackViewUrl;
              var isrc = response.results[0].isrc;
              var songId = response.results[0].trackId;
              var albumId = response.results[0].collectionId;

              var songInfo = {
                  song: song,
                  artist: artist,
                  album: album,
                  albumArt: albumArt,
                  previewUrl: previewUrl,
                  songLink: songLink
              };


              //Generate a new div if song found, including all information


              var songDiv = document.createElement("div");
              songDiv.classList.add("song-info-container")
              var songInfo = '<iframe allow="autoplay" *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="175" style="width:100%;max-width:660px;overflow:hidden;border-radius:10px;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/am-i-dreaming/' + albumId + '?i=' + songId + '&theme=dark"></iframe>';
              songDiv.innerHTML = songInfo;

              //Generate new audio element 
              var audioDiv = document.createElement("div");
              audioDiv.classList.add("song-info-container");

              document.getElementById("song-container").appendChild(songDiv);
          } else {
              console.log("Song not found.");
              return null;

          }
      }

  });
 }
