import React from 'react'
// Card
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

const Cards = () => {

  // Translation
  const { t } = useTranslation();

    return (
        <div>
             {/* Card 1 */}
          <Card className="card-div" sx={{ maxWidth: 345 }}>
            <CardMedia
              className="card-image"
              component="img"
              height="140"
              image="https://images.pexels.com/photos/5496464/pexels-photo-5496464.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-5496464.jpg&fm=jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t("home.card1")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="/courses" size="small">
                {t("home.more")}
              </Button>
            </CardActions>
          </Card>

          {/* Card 2 */}
          <Card className="card-div" sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t("home.card2")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="/courses" size="small">
                {t("home.more")}
              </Button>
            </CardActions>
          </Card>

          {/* Card 3 */}
          <Card className="card-div" sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://i.ytimg.com/vi/mQ34n7_-zIc/maxresdefault.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t("home.card3")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="/courses" size="small">
                {t("home.more")}
              </Button>
            </CardActions>
          </Card>
        </div>
    )
}

export default Cards
