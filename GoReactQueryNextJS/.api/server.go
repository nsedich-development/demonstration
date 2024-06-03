//https://github.com/gin-contrib/cors
//https://github.com/gin-contrib/cors/issues/73
//https://stackoverflow.com/questions/72972764/golang-no-required-module-provIDes-package

package main

import (
	"math/rand"
	
    "net/http"
	
	"github.com/gin-contrib/cors"
    "github.com/gin-gonic/gin"
)

// album represents data about a record album.
type album struct {
	AlbumId int `json:AlbumId`
    ID 		int  `json:ID` 
    Title	string  `json:Title`
    Url 	string  `json:Url`
    ThumbnailUrl  string `json:ThumbnailUrl`
}

// albums slice to seed record album data.
//var albums = []album {
//    {AlbumId: 1, ID: time.Unix(time.Now().Unix(), 0), Title: "accusamus beatae ad facilis cum similique qui sunt", Url: "https://via.placeholder.com/600/92c952", ThumbnailUrl: "https://via.placeholder.com/150/92c952"},
//    {AlbumId: 1, ID: time.Unix(time.Now().Unix(), 0), Title: "accusamus beatae ad facilis cum similique qui sunt", Url: "https://via.placeholder.com/600/92c952", ThumbnailUrl: "https://via.placeholder.com/150/92c952"},
//}


func main() {
	router := gin.Default()
	router.Use(cors.Default())
    
	router.POST("/photos", getAlbums)
	router.GET("/photos", getAlbums)
    
	router.Run("localhost:8080")
}

// getAlbums responds with the list of all albums as JSON.
func getAlbums(c *gin.Context) {
	
	var albums = []album {
		{AlbumId: 1, ID: rand.Intn(100), Title: "accusamus beatae ad facilis cum similique qui sunt", Url: "https://via.placeholder.com/600/92c952", ThumbnailUrl: "https://via.placeholder.com/150/92c952"},
		{AlbumId: 2, ID: rand.Intn(100), Title: "accusamus beatae ad facilis cum similique qui sunt", Url: "https://via.placeholder.com/600/92c952", ThumbnailUrl: "https://via.placeholder.com/150/92c952"},
	}

    c.IndentedJSON(http.StatusOK, albums)
}