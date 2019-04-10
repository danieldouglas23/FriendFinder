// ===============================================================================
// DATA
// Below data will hold all of the potential friends
// ===============================================================================

var friendsArray = [
    {
        "name":"Anna Kendrick",
        "photo":"https://m.media-amazon.com/images/M/MV5BMjIzOTA0OTQyN15BMl5BanBnXkFtZTcwMjE1OTIwMw@@._V1_.jpg",
        "scores":[
            5,1,4,4,5,1,2,5,4,1
          ]
      },
      {
        "name":"Tessa Watts",
        "photo":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhAQEBAVEBAVFyAbEBYVEBsQEBAWIB0iIiAdHx8kKDQsJCYxJx8fLTstMT1AMEMwIytKTT8uNzQ5MEABCgoKDg0OFRAOFSslFhkrKzc3KzcrLTcrNy03NzctNzctKysrKysrLSsrKystKysrKysrKysrLSsrKysrNysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYHAQj/xAA5EAABAwIEAwUHBAICAgMAAAABAAIRAyEEBRIxQVFhBhMicYEykaGxwdHwByNCUhThYnKS8RUWU//EABkBAQADAQEAAAAAAAAAAAAAAAABAgQDBf/EACARAQEAAgMBAAMBAQAAAAAAAAABAhEDITESEzJBUSL/2gAMAwEAAhEDEQA/ADQntCa0KVoVlDmhStC8YFM1qBNapWtXrGqVrUHjWqQNTmtUjWqQwNTtKeGqHG4unQbqquDRw/s48gOKeB+leOAG9vNZnGdoqr57lops/s72j9lT1y+ofHVLj5krjlzYzx0nFa2tXH0G+1VYPN4TaeZYdxhtVhP/AG3WHOXUf5VIPVqTcsaLtqAneNlX86/4m/ZUadnA+RT9K5qA+m7U1xB81pMp7UXFOuC3gHzInqumPJK53CxpSxeFimaQRIMhItXRQMWKNzUUWqNzUAjmqN4RTmqF7UAxCYQp3NUbgghcEl64JIGMCmaFExTsUCRgU7GqOmEQwIHNapmtTWBTMCketapQ1JoUeMxLaTHVHbNE+fRQA85zZmGbtqqH2WzHqeQWBxuYuqPL3u1OPE7AcmjkhM6zh9eq6DJO5/i0KtFQlwa2SefErJnncq04YyLhrwTeXnqYHuRdJ1Q+xSBHN1mqLBBlIAv8TvgES7GPqD9phd1E6R6rlXaS1HWo14kmiByFMH4koHEVy3bux/1IT6mQ16pl9ugJC9/+qcSSPVR9SerTiyqufjybO24GdkVgquoEOPlKkfkGmwkryphRRvafJXmUvimXHZ60nZvNBTPdvd4T7PGFsYm4XHW5jDt10jsnmYr09JPib8lp48v5Wbkx/q3LVG5qKc1RuauzkEc1RPaintULwgFe1QuCKeFC8IBnBJPcEkETAp6YUNMImmFAlphENCiphEMCkPY1TNC8Y1Ssag9aFhf1Izct0YZhuRLvot8Grh+c4w4jFV6p2LyG9GjZcuW6jpxzdCufobAu43KNwNLQNR9s79FXUfG+Tt9vz4LR5Bhe9cXu9lpsOZWTK6jVhj9VYZVlZfDqtxwb91qcNhgBYIWiyEdQ4XhZ/rdbpjJOkvdoevSHJFknqoKxlKYqyuwBU2Y4cOBB9FeYgKuxbRBlWxuqryY7jn+PYWOgXHWxC0PY/N+6qsM+E2dPI81R5yPFCiwFWCFql12wWfx3wXAI2TXBA9mcV32HY4mSBB6qxcFsnc2yWaugz2qF7UU4KFwQCPaoHhFvCHeEAzwknvCSCCmETTCgphFUwgmYERTCjphEMagkYFOxqjYFMkQGzStoo1n/ANWOI9y4QfC1xXZ+2VbRg655tj3lcPzGpDQOd1w5vZHfj82kwroa53E2atz2f006QkwPqsdlWH190zncrTuq0qLS6pfnOwWXPvpt4uu2mwmOokx3jZ5EqyY0bhwI6FczxmcUHRFCoARLXAaQeoB8ijMqzB7TYuAtIIjdUvFZNuk5ZbrbogNjeVG+nPEITC1ZZqWbzzOSC5rXQBuRwVJN9Oluu2ixEcx71UY8+EwsvTzSlP7tV5PGAQPej212lv7dQkHn4gV0/Hr1T8n1Omfz5pkH3IHD1Jjg4fEK07SUzoDgNt1n8PVkahZw+K7Txjz6rtP6c4jVSew8D7rLW1AuffpjiJcY/ky/pt8yuhuC18f6sufoZwULwi3tUD2qyoR4Q7wjHhDvCAR4ST3heIIaaJpoemEVTCIEUwiWBD00UwIlLTClITWJylDKfqZV04Ij+zwPmVxnMbuYOYC61+q7/wBii3m4k+g/2uV1mTUpHhAKzct/6aOPxpezWHmo4/1AAWlxGTsrAyJ+io+yxs48S4rYYNYstyvS48ZcVBXyJtTQKgc7TZh0gED8lWX+GN3gHS3S2wADeSvDTbv9VV42oCdIM84Km55eGPFjLuQsGIoke5VmAwjTB0gva7UCRIJ6jorgUoZHBV2EcGvLTbl1VZbO4vcZeqp25EKdV1S5JmxGpgnomYHs8KUkWBuR/H0WwNIboPHPVryZVXHgxnjI9oqI7tw5BYjCNh5G0hbnPn+EjmspiGfvmNoj4Lvh4ycs7dC/ShhLj0n5LpxCwH6VYeBVPVdAcFq4v1YuT1E5QvU7goXhdVQ1QId4RL1A8KoFqBJPeEkQEpIqmENSCLYEBFIIlgUFMIqmEErU4LxoTmhWK59+rR8NDpJ+IXNS4aWOPCy6R+rDpNNs7Nv6lcxBljuhn89yx8n7Vpw/WNNkdUt1gHjPvWgw2YnnCx+WVtNelJtVpx0lp+0rYUMID5LPnNN3Dl0K/wAt9XwtNuJ5ILE0qrSe7IvvKMxjv8doa1hcXGBwF+ZTsPQxThq/xrXsX38O6rjLfHW5zyhKmcV+77vupfz/AI+9D4TvSW95Ai9jxWjdha5gf4L9ZbI/cbpjmqXHVK1Man4VwBEgg6rTEq1xv8iJlP7RzsW5gg+hVdiscOa9wuJFakXC4FuoQbMv1anknSNhzVZO+1rn10CzDEMDTUeYAHhH9uipstwRfDiZkEj1JKCz1/eVnsB2gATYEb/MrQZO0am0x/ER8LfT3rv5GDLLddN7B4QMokgRqK0jgqzsjR04WiDuRJ9bq2eFs45rGMmd3UDgonhTvChcrKBagQ70XUQzwiQzwvE54SUICUkUxDUgiqYQE0kUwIekESxBMnsCYE5xgE8gpHLP1QrzW6CAFz2kZ1D84/dbHt7WmqBPGdrib/QLEUn+IhY8u7WqeRLjKzm0sPUb7THmPnC6BkWYtq02vadx7ui55iL4Z3R/0UnZLOu4f3bz+24/+JUZY/WLpx5/OTruJIewAjdQYDG4ik4MbVOmbBwBbcQocJXD2gA3COo0psQCOqzzL5bZJl7Fvis1xdNuo6W8BNK3v1LN4/M8RiPA97dMQ7QzTaZ3JKsauDEWFuRMhVtRhmB8Fe8is4cZPEmCoNawwAGgRsq3OscKFB7jubgc+QVhVqhjInjdYTtjiXVA0/wDoHVVwm72pyZanSqyymX1WOO7jLir/JKp717+B28ifsFSYCr3bqh30sMeZVxkgswcTv5bLvWSO75LTihSH/FFPCZlrYpsHID5KVwW3HxmvqBwULwiXBQvClAR4Q9QIt4Q9QKAG8JJ1QL1QgDSRdMIWii6YUgmmEVTQ9NFU0ge0LzGDwEczHpxT2hD5idhxF/KTH3S+E9cU7b4jVXfewlZBjvFPmr7tViA7EViNi4x5Ss6DdY57Wr/AAXiHRRI4F9/cqjDNmoxvNw+atsa39oDmSfcVB2cw/eYmnyHiPorYeUs7jYZZj30iJu35LXYHN6bgDPxWXoYaS5sbFRVcC4HwkjyXCyVqwyuLf1M0pkbqjx2ZspgmfLqs0MNX4OKLweTl5l5JPVV+Z/XT8ls1IcK1TEGBIbx6pZ1lOui5oF48PmtBhcE1ggBSOpSq/ffSPjrtycE+IGQSQCDwWjyVw7xg4be5F9oez7tRqUmyd3ADiqbKXOY8B4LXA+IGxC6zLfbNljrp9H4D2GH/iPkpXBB5BW14ei4cWD5I9b8fGOoXBQPCJcFA8KyAtQIaoi6gQtQIBaiS9qJKABSRdJB0kZSRAqkiqaGpBEsSCemFW53igynUeRZrXHfk37lWYMCVhv1JzHu6JpA3fY9QLn4qud1FsJuuP5k/U9x5myriisQdz6KJjJAPu6rLGipMwcAKY4ab+pMq97A5dZ1ZwibN8h/tV7MAKlRuo/1EchAldCw2GbSYABAAuozvzjr/V+OfV3/AIrsMyKjvNWz8MDBQAZ4yVd4dktXDJpwBswwRtCkOCcyiimNhUroHcxe02KZzOKfQbxO/wAlBa9ZQBF91U5rkdOruIPAj2grtVmc53SogtBDqv8AW9vMjZMZbf8AlTOyTtZ9lO0FPCU24fFO0QfBUiWEdYuFuKVVrwHMcHtPslp1NPqvnyvjTVcXPJ5mYmeQHRHZN2gxGEdOHq6Wm7mHxUneh+YhenhbjNV5mWrdx3RwUL1jsm/UnD1IbimHDP8A7AF9E/ULW0cRTqtD6b21GHZzXBzT6hdJdqI6iFqIqohqqsBKiSVRJQK+kEXTQlJF0kQLpBE0wh6aIaYvsgfXqBoJPBcb/UDMDVqwLkcB/EcB7r+q1na/tjTYx7KJ1HYvnwDy58VybF52Huc5wLiTJvF1w5Lb1HXj1O6Iw+Cp71JeRs0HSyeZP0Cc5omwA8tgqk5w8bMaPeUK/G1CSdbvQwoxw0nLLbTURE2BM2MmVtcJihUpgzNrrmeS4qC9rjJIlsm/WPzgtThK72busfahvsqOTDcW4s/nLtp8BQDmvKsMupmCCg8vbqa0sII4Qd1bUAAsOVehjCq0o3SZUAHMqLEVeCZSIaCSQOZNlC/Sd9cDdCvzFjLucBfiYVTm+dU2WbNQmfZEtHmVlcdibF9VxBB4ut6N8vy67cfDll3XDk58cese60WYdpXvgUm6WEbkw929hy2WQx2cU2mNRe7cgc+Mu+iqsfmrqktZLWefid5lVtlrxwmPjDnncr2v39oGuILmO9CLBetzulY6XzO5AP8A7WfSVlGnpZ3ScTqcQCf6aQPmrDKs0dSdrwlctfx0GzvNuxWIlOoscXANnUfZjdB2vJ/1GJhuLpX/AL0xv5t+y1eXZtQxTC+i/UBZ0tLS09VxPA4JzWCXGoZmDI9yusuzCph6gfSdoP8AJmzXDr9lMys9Lp1aoElW5RnFPFMltni1RszpP2SXSVU6ki6SEpIqmUQK7wNBc4hrQJcTsAsJ2l7VOqh1OmHMo7Ts6pHO234VP2tzYvccOwwxl6h4E8uoHzWIxlS7RqaQfcJ+qplkmAe1L3d2wEiHOmAI4fnxWY8lfdqHyKQ4CeHkqFVWeBIJNXoQeiRtur/LM5b7NUkGdxYEfnzVAvEG6wuJeyHUn93rvZw9Qef+0dT7RYgatVRp5+DYxv1XPKOJez2HFvOCp/8A5Ot/f0gQouMvsWmeU8reVs7xD4AdplpIAjx+R6KvrYku9uoZ/kSbC219p+iyDsfVO7zPMWUD3k+0S7zKTGTyFzyvtaPHZzSbPdw93DwnQ07yJ6qhxWKfVcXPMk36D0UJK8UqvV5KSRQeL0rxJB7Cu+zmEF6rrAWbeL8SqnDUHVHtY0S47LZUKLWBoaCWtAAHsT1IPX5oPW1HQAHE2g7tDhyk8PgpqeHc0e0Ndy4g6ztvGxFwkXgunSWidtMMdvx98Qow5xdsaQkC53F9yBdED8pxbsNVZUadUCHCwLmncCDfn7kkK1moAtAAvJvEz890lMo6ZSXmY4zuaT6nECG9XGwSpFZ7ttibU6IMEy439B9Ve9RVmWkuJ4vdMuEnXPpHAoLE+JsuJ1AxztujHxtT3i9jfmR1I4oQsnUDysRA/Isuayi7TOk0bz4TEm8T8FSLX4nLadfTqLmvZYiROnn1/wBrylk+HaNDmancSXHUP9SiWWZhqhbrDHFkxqDSWz5praZ/qfctvRw7KbdDWkNaJEE8eJ8r3RPAkNAB38PhJ5yePVBhBhKhBIpvIFz4DsnNwNY3FJ5H/QrbVHvAbIJ6deW1xvEJ7Wm5AcBsYMEcgPzigwpwNb/8n/8AgUwYZ8xocT/1K3dYmRFnDaDuZIMnjHonAuOxIYTFhGkzuJ8ygw9PLa5IHdOk7AjTPvR+H7OVnRJa0nYTqd6wtK+ofDeRENcZiZ/LJpAcSLAWAk8unxjmgp6PZxhBJquMcmAT5KZnZZl/3CSBMTfy236K2aS0lkkTYhwjXymyTWeKw0DiCBLTN7/fogqh2WYZDTUeR00tPNOwmRUA6DDybEOOru+fEdPkrYOklpq6T5EBp4OAA2MQoKlVocA4ubtrOnhvA9SEFSMloTBDjFzvED4pmM7PMbMOLTEgH2fWyvAG6pLg7VdoLZ1GdulglXefEQB7Nh3ktBJ68B15IKjs3loZ3j6wh0Q2bjTFz1BsrSnWZBDgLbOH5+WTKhJHWIhogtE3H5yTRVIGgDSCPP0/OSCR1ThDjfxaY2HFPqkzBswbgxYwYHkmN8PtTPETJZGw805s+0Lgm41XHmiEbQQ1pB1GTFx4Z3SUbqYESZYTPsx0jmOKSDqdMrC9qcQX4moBfR4djeBtPmSvUlfLxEVD3hjT4TbeDBbzTHPgthttnHfUEklRIjBt1ADUAA+XSRwtwUVRniaLiZvEAHZJJA913C+5IdqNzx3UtNwEXkQbDbb6pJIlIcSxu4JBu0h0ARy+6bTqagCB0knfoUklAY3QZ1Etgw3/AF7wnAG8un+xDtRvw22+SSSkN7oh2oEU/SY6GyRZLtQINxq1GBYx8oukkg9e4kkyTFjJOto6Db7JVWeIS7UIA/4OG/mkkgTCXEBoPiF53B4QDPxUHdMJdIkg+vp6RCSSIJjg572wdQaCBGmT5J0t0F0kQZiLHp8Qkkgic65YJ1O3PQLykGtAaYJAmSQePI2SSUiY6YtImIMyY43vcfZSMDBF4Fhe4HqOPmkkoDMQPESZIBkg+Fon86ykkkg//9k=",
        "scores":[
            1,5,2,2,1,5,4,1,2,5
          ]
      },
      {
        "name":"Jennifer Aniston",
        "photo":"https://gl-images.condecdn.net/image/k3MEBzkoOx3/crop/200/square/f/jenniferaniston_gettyimages-1069333646_sf.jpg",
        "scores":[
          3,4,2,1,5,4,2,4,5,3
          ]
      },
      {
        "name":"Kristen Bell",
        "photo":"https://cdn.verbolia.com/api/images/H4sIAAAAAAAEAD2NuwoCMRBFf0Wm1mTRLp1WimylYp1kh2Q0jyUZZUX8dyOK7eHcc59wKgEUeOaxKintkMQdi8mBtLA5yjpmZklRO6zSYkBTiB!yWqgypoXBEMRldDCHXk8Ub3GL5DyDWnbdn51pYP9D68BYkmY84tQ02H9Ls00rtcru83TggmzbYvV6A45DyKyhAAAA/kristen-bell.jpg",
        "scores":[
           5,1,2,3,4,5,1,2,3,4
          ]
      },
      {
        "name":"Halle Berry",
        "photo":"http://www.gannett-cdn.com/-mm-/db70757c49a63cbc5692ba7a4de89a4ebfb4b43e/c=460-0-2541-2081/local/-/media/Louisville/2014/07/07/halleberry.jpg?width=200&height=200&fit=crop",
        "scores":[
            1,5,4,2,4,3,5,3,4,1
          ]
      },
      {
        "name":"Gabrielle Union",
        "photo":"https://pbs.twimg.com/profile_images/672068677211172864/2EAoEgP1_200x200.jpg",
        "scores":[
            2,4,3,2,4,3,1,5,1,5
          ]
      },
      {
        "name":"Reese Witherspoon",
        "photo":"https://pmcdeadline2.files.wordpress.com/2013/05/reesew__130515235926-200x200.jpg?w=1400",
        "scores":[
            1,4,3,4,2,4,1,5,5,5
          ]
      },
      {
        "name":"Jennifer Lawrence",
        "photo":"https://cd.cinescape.com.pe/cinescape-200x200-127533.jpg",
        "scores":[
            5,2,4,3,2,4,1,5,5,1
          ]
      },
      {
        "name":"Jada Pinkett",
        "photo":"https://www.gannett-cdn.com/-mm-/819fb33b3784cdada5accb63a07080eb65b6b7fe/c=0-0-1227-1227/local/-/media/2018/01/12/USATODAY/USATODAY/636513569075444446-D-SAG-JADA-SMITH-29-14360103.JPG?width=200&height=200&fit=crop",
        "scores":[
            3,3,1,1,1,1,5,5,2,5
          ]
      },
      {
        "name":"Charlize Theron",
        "photo":"https://www.joblo.com/assets/images/oldsite/newsimages1/charlize-theron-thumb.jpg",
        "scores":[
            5,2,4,2,5,5,1,1,3,3
          ]
      }
                              
      
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;







