import React from 'react';
import useStyles from './DescPartStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DescBox from './DescBox';

const DescPart = () => {
  const classes = useStyles();

  return (
      <Grid container className={classes.background}>
        <DescBox tytul="O nas" descript="NazwaNaszejWypożyczalni to wypożyczalnia, która umożliwia szybki i sprawny wynajem samochodu na terenie powiatu częstochowskiego. Konfigurator internetowy pozwala na wypożyczenie samochodu odpowiedniego dla naszych potrzeb. "></DescBox>
        <DescBox tytul="Dlaczego my?" descript="Jesteśmy firmą z wieloletnim stażem wynajmu pojazdów. Nasi klienci zawsze są zadowoleni ze świadczonych przez nas usług. Dlatego zdecydowaliśmy się na rozpoczęcie wynajmu pojazdów przez internet."></DescBox>
        <DescBox tytul="Nasze Pojazdy" descript="Dysponujemy samochodami osobowymi, SUV-ami oraz busami i dostawczakami. Do dyspozycji klientów są samochody z automatyczną i manualną skrzynią biegów. Samochody są w pełni sprawne, co gwarantuje bezpieczeństwo."></DescBox>
        <DescBox tytul="Pakiety Premium" descript="W naszej wypożyczalni istnieje również możliwość dokupienia pakietu premium do wypożyczanego samochodu. Pakiet obejmuje dodatki takie jak: XXXX YYYYY ZZZZZ QQQQ WWWWWW"></DescBox>
        <DescBox tytul="Siedziba" descript="Parking na którym przetrzymujemy nasze pojazdy znajduje się na ulicy XXX32 i to właśnie tam mogą Państwo je obejrzeć. Jeśli chodzi o biuro, to jest ono ulokowane w budynku XYZ przy ulicy XYZ32"></DescBox>
        <DescBox tytul="Ceny" descript=" Ceny najmu naszych pojazdów są zawsze dostosowane do sytuacji panującej obecnie w gospodarce. Dzięki temu, każdy ma możliwość wypożyczyć samcohód, który nie obciąży jego domowego budżetu."></DescBox>
      </Grid>
    
);
};

export default DescPart;