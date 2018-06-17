// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-sleep").on("click", function(event) {
      var id = $(this).data("id");
      var newSleep = $(this).data("newsleep");
  
      var newSleepState = {
        sleepy: newSleep
      };
  
      // Send the PUT request.
      $.ajax("/api/cats/" + id, {
        type: "PUT",
        data: newSleepState
      }).then(
        function() {
          console.log("changed sleep to", newSleep);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newArtist = {
        groupName: $("#aname").val().trim(),
        contactName: $("#conname").val().trim(),
        contactEmail: $("#conemail").val().trim(),
        contactPhone: $("#conphone").val().tric(),
        website: $("#website").val().trim(),
        instagram: $("#instagram").val().trim(),
        facebook: $("#facebook").val().trim(),
        spotify: $("#spotify").val().trim(),
        twitter: $("#twitter").val().trim(),
        soundcloud: $("#soundcloud").val().trim(),
        youtube: $("#youtube").val().trim(),
        applemusic: $("#apple").val().trim(),
        addtlink1: $("#addtlink1").val().trim(),
        addtlink2: $("#addtlink2").val().trim(),
        comments: $("#comments").val().trim(),
        upcomingProjects: $("#upcoming").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/artist/admin", {
        type: "POST",
        data: newArtist
      }).then(
        function() {
          console.log("created new artist");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-cat").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/cats/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted cat", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  