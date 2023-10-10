import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import Estilos from '../styles/estilos';
import { LinearGradient } from 'expo-linear-gradient';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import AsyncStorageSales from '@react-native-async-storage/async-storage';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Vendas() {
  // Obtém a data atual
  var data = new Date();
  var dia = data.getDate().toString().padStart(2, '0'); // Obtém o dia do mês com dois dígitos (ex: 05)
  var mes = (data.getMonth() + 1).toString().padStart(2, '0'); // Obtém o mês atual com dois dígitos (ex: 08)
  var ano = data.getFullYear(); // Obtém o ano atual
  var today = dia + "/" + mes + "/" + ano; // Formata a data no formato "dd/mm/yyyy"

  // Inicializa um estado para a impressora selecionada chamado na linha 438
  const [selectedPrinter, setSelectedPrinter] = React.useState();

  // Define um produto chamado "frango" e seu estado inicial
  const prod_one = 'frango';
  const [produtoOne, setProdutoOne] = useState({
    count: 0, // Quantidade do produto
    preco: 15, // Preço unitário do produto
    pgtoDn: 0, // Pagamento em dinheiro
    qtdDn: 0, // Quantidade vendida em dinheiro
    totalDn: 0, // Total em dinheiro
    pgtoCt: 0, // Pagamento em cartão
    qtdCt: 0, // Quantidade vendida em cartão
    totalCt: 0, // Total em cartão   
    totalAll: 0, // Total geral
    abastecimento: '10' // Quantidade de abastecimento
  });

  const prod_two = 'churrasco';
  const [produtoTwo, setProdutoTwo] = useState({
    count: 0,
    preco: 17,
    pgtoDn: 0,
    qtdDn: 0,
    totalDn: 0,
    pgtoCt: 0,
    qtdCt: 0,
    totalCt: 0,  
    totalAll: 0,
    abastecimento: '10'
  });

  const prod_three = 'feijoada';
  const [produtoThree, setProdutoThree] = useState({
    count: 0,
    preco: 15,
    pgtoDn: 0,
    qtdDn: 0,
    totalDn: 0,
    pgtoCt: 0,
    qtdCt: 0,
    totalCt: 0,  
    totalAll: 0,
    abastecimento: '10'
  });

  const prod_four = 'rabada';
  const [produtoFour, setProdutoFour] = useState({
    count: 0,
    preco: 15,
    pgtoDn: 0,
    qtdDn: 0,
    totalDn: 0,
    pgtoCt: 0,
    qtdCt: 0,
    totalCt: 0,   
    totalAll: 0,
    abastecimento: '10'
  });

  const prod_five = 'mista';
  const [produtoFive, setProdutoFive] = useState({
    count: 0,
    preco: 15,
    pgtoDn: 0,
    qtdDn: 0,
    totalDn: 0,
    pgtoCt: 0,
    qtdCt: 0,
    totalCt: 0,   
    totalAll: 0,
    abastecimento: '10'
  });

  const prod_six = 'carne de panela';
  const [produtoSix, setProdutoSix] = useState({
    count: 0,
    preco: 15,
    pgtoDn: 0,
    qtdDn: 0,
    totalDn: 0,
    pgtoCt: 0,
    qtdCt: 0,
    totalCt: 0,   
    totalAll: 0,
    abastecimento: '10'
  }); 

  // metodos asynStorage  é um sistema de armazenamento de valores-chave
  // que é global para o aplicativo.
  const setAbastecer = (key, value) => {
    AsyncStorageSales.setItem(key, value);
  }
  const getAbastecer = async (key) => {
    const quantidade = parseInt(await AsyncStorageSales.getItem(key));
    switch (key) {
      case prod_one:
        setProdutoOne({
          ...produtoOne, count: (quantidade),
          produtoOne, pgtoDn: (produtoOne.pgtoDn = 0),
          produtoOne, qtdDn: (produtoOne.qtdDn = 0),
          produtoOne, pgtoCt: (produtoOne.pgtoCt = 0),
          produtoOne, qtdCt: (produtoOne.qtdCt = 0),          
          produtoOne, totalAll: (produtoOne.totalAll = 0)
        })
        break;
      case prod_two:
        setProdutoTwo({
          ...produtoTwo, count: (quantidade),
          produtoTwo, pgtoDn: (produtoTwo.pgtoDn = 0),
          produtoTwo, qtdDn: (produtoTwo.qtdDn = 0),
          produtoTwo, pgtoCt: (produtoTwo.pgtoCt = 0),
          produtoTwo, qtdCt: (produtoTwo.qtdCt = 0),         
          produtoTwo, totalAll: (produtoTwo.totalAll = 0)
        })
        break;
      case prod_three:
        setProdutoThree({
          ...produtoThree, count: (quantidade),
          produtoThree, pgtoDn: (produtoThree.pgtoDn = 0),
          produtoThree, qtdDn: (produtoThree.qtdDn = 0),
          produtoThree, pgtoCt: (produtoThree.pgtoCt = 0),
          produtoThree, qtdCt: (produtoThree.qtdCt = 0),         
          produtoThree, totalAll: (produtoThree.totalAll = 0)
        })
        break;
      case prod_four:
        setProdutoFour({
          ...produtoFour, count: (quantidade),
          produtoFour, pgtoDn: (produtoFour.pgtoDn = 0),
          produtoFour, qtdDn: (produtoFour.qtdDn = 0),
          produtoFour, pgtoCt: (produtoFour.pgtoCt = 0),
          produtoFour, qtdCt: (produtoFour.qtdCt = 0),          
          produtoFour, totalAll: (produtoFour.totalAll = 0)
        })
        break;
      case prod_five:
        setProdutoFive({
          ...produtoFive, count: (quantidade),
          produtoFive, pgtoDn: (produtoFive.pgtoDn = 0),
          produtoFive, qtdDn: (produtoFive.qtdDn = 0),
          produtoFive, pgtoCt: (produtoFive.pgtoCt = 0),
          produtoFive, qtdCt: (produtoFive.qtdCt = 0),          
          produtoFive, totalAll: (produtoFive.totalAll = 0)
        })
        break;
      case prod_six:
        setProdutoSix({
          ...produtoSix, count: (quantidade),
          produtoSix, pgtoDn: (produtoSix.pgtoDn = 0),
          produtoSix, qtdDn: (produtoSix.qtdDn = 0),
          produtoSix, pgtoCt: (produtoSix.pgtoCt = 0),
          produtoSix, qtdCt: (produtoSix.qtdCt = 0),         
          produtoSix, totalAll: (produtoSix.totalAll = 0)
        })
        break;      
    }
  }

  const setAdd = (key, value) => {
    AsyncStorageSales.setItem(key, value);
  }
  const getAdd = async (key) => {
    const valor = parseInt(await AsyncStorageSales.getItem(key));
    switch (key) {
      case prod_one:
        setProdutoOne({
          ...produtoOne, count: (produtoOne.count + valor)
        })
        break;
      case prod_two:
        setProdutoTwo({
          ...produtoTwo, count: (produtoTwo.count + valor)
        })
        break;
      case prod_three:
        setProdutoThree({
          ...produtoThree, count: (produtoThree.count + valor)
        })
        break;
      case prod_four:
        setProdutoFour({
          ...produtoFour, count: (produtoFour.count + valor)
        })
        break;
      case prod_five:
        setProdutoFive({
          ...produtoFive, count: (produtoFive.count + valor)
        })
        break;
      case prod_six:
        setProdutoSix({
          ...produtoSix, count: (produtoSix.count + valor)
        })
        break;      
    }
  }

  const setRemove = (key, value) => {
    AsyncStorageSales.setItem(key, value);
  }
  const getRemove = async (key) => {
    const valor = parseInt(await AsyncStorageSales.getItem(key));
    key == prod_one && produtoOne.count >= 1 ?
      setProdutoOne({
        ...produtoOne, count: (produtoOne.count - valor)
      })
      : false;
    key == prod_two && produtoTwo.count >= 1 ?
      setProdutoTwo({
        ...produtoTwo, count: (produtoTwo.count - valor)
      })
      : false;
    key == prod_three && produtoThree.count >= 1 ?
      setProdutoThree({
        ...produtoThree, count: (produtoThree.count - valor)
      })
      : false;
    key == prod_four && produtoFour.count >= 1 ?
      setProdutoFour({
        ...produtoFour, count: (produtoFour.count - valor)
      })
      : false;
    key == prod_five && produtoFive.count >= 1 ?
      setProdutoFive({
        ...produtoFive, count: (produtoFive.count - valor)
      })
      : false;
    key == prod_six && produtoSix.count >= 1 ?
      setProdutoSix({
        ...produtoSix, count: (produtoSix.count - valor)
      })
      : false;
    
  }
  const setZerar = (key, value) => {
    AsyncStorageSales.setItem(key, value); // Define o valor com a chave especificada no AsyncStorageSales
}
const getZerar = async (key) => {
    const valor = parseInt(await AsyncStorageSales.getItem(key)); // Obtém o valor armazenado com a chave e converte para um número inteiro

    // Verifica qual chave (key) foi passada e atualiza o estado de acordo
    switch (key) {
        case prod_one:
            setProdutoOne({
                ...produtoOne,
                count: valor, // Atualiza a quantidade do produto
                pgtoDn: valor, // Atualiza o pagamento em dinheiro
                qtdDn: valor, // Atualiza a quantidade vendida em dinheiro
                pgtoCt: valor, // Atualiza o pagamento em cartão
                qtdCt: valor, // Atualiza a quantidade vendida em cartão               
                totalAll: valor // Atualiza o total geral
            });
            break;
      case prod_two:
        setProdutoTwo({
          ...produtoTwo, count: (valor),
          produtoTwo, pgtoDn: (produtoTwo.pgtoDn = valor),
          produtoTwo, qtdDn: (produtoTwo.qtdDn = valor),
          produtoTwo, pgtoCt: (produtoTwo.pgtoCt = valor),
          produtoTwo, qtdCt: (produtoTwo.qtdCt = valor),         
          produtoTwo, totalAll: (produtoTwo.totalAll = valor)
        })
        break;
      case prod_three:
        setProdutoThree({
          ...produtoThree, count: (valor),
          produtoThree, pgtoDn: (produtoThree.pgtoDn = valor),
          produtoThree, qtdDn: (produtoThree.qtdDn = valor),
          produtoThree, pgtoCt: (produtoThree.pgtoCt = valor),
          produtoThree, qtdCt: (produtoThree.qtdCt = valor),          
          produtoThree, totalAll: (produtoThree.totalAll = valor)
        })
        break;
      case prod_four:
        setProdutoFour({
          ...produtoFour, count: (valor),
          produtoFour, pgtoDn: (produtoFour.pgtoDn = valor),
          produtoFour, qtdDn: (produtoFour.qtdDn = valor),
          produtoFour, pgtoCt: (produtoFour.pgtoCt = valor),
          produtoFour, qtdCt: (produtoFour.qtdCt = valor),         
          produtoFour, totalAll: (produtoFour.totalAll = valor)
        })
        break;
      case prod_five:
        setProdutoFive({
          ...produtoFive, count: (valor),
          produtoFive, pgtoDn: (produtoFive.pgtoDn = valor),
          produtoFive, qtdDn: (produtoFive.qtdDn = valor),
          produtoFive, pgtoCt: (produtoFive.pgtoCt = valor),
          produtoFive, qtdCt: (produtoFive.qtdCt = valor),          
          produtoFive, totalAll: (produtoFive.totalAll = valor)
        })
        break;
      case prod_six:
        setProdutoSix({
          ...produtoSix, count: (valor),
          produtoSix, pgtoDn: (produtoSix.pgtoDn = valor),
          produtoSix, qtdDn: (produtoSix.qtdDn = valor),
          produtoSix, pgtoCt: (produtoSix.pgtoCt = valor),
          produtoSix, qtdCt: (produtoSix.qtdCt = valor),          
          produtoSix, totalAll: (produtoSix.totalAll = valor)
        })
        break;
      
    }
  }
  const setPgtoDn = (key, value) => {
    AsyncStorageSales.setItem(key, value);
  }
  const getPgtoDn = async (key) => {
    const valor = parseInt(await AsyncStorageSales.getItem(key));
    key == prod_one && produtoOne.count >= 1 ?
      setProdutoOne({
        ...produtoOne, count: (produtoOne.count - valor),
        produtoOne, pgtoDn: (produtoOne.pgtoDn + produtoOne.preco),
        produtoOne, qtdDn: (produtoOne.qtdDn + valor),
        produtoOne, totalAll: (produtoOne.totalAll = produtoOne.pgtoDn + produtoOne.pgtoCt + produtoOne.preco)
      })
      : false;
    key == prod_two && produtoTwo.count >= 1 ?
      setProdutoTwo({
        ...produtoTwo, count: (produtoTwo.count - valor),
        produtoTwo, pgtoDn: (produtoTwo.pgtoDn + produtoTwo.preco),
        produtoTwo, qtdDn: (produtoTwo.qtdDn + valor),
        produtoTwo, totalAll: (produtoTwo.totalAll = produtoTwo.pgtoDn + produtoTwo.pgtoCt + produtoTwo.preco)
      })
      : false;
    key == prod_three && produtoThree.count >= 1 ?
      setProdutoThree({
        ...produtoThree, count: (produtoThree.count - valor),
        produtoThree, pgtoDn: (produtoThree.pgtoDn + produtoThree.preco),
        produtoThree, qtdDn: (produtoThree.qtdDn + valor),
        produtoThree, totalAll: (produtoThree.totalAll = produtoThree.pgtoDn + produtoThree.pgtoCt + produtoThree.preco)
      })
      : false;
    key == prod_four && produtoFour.count >= 1 ?
      setProdutoFour({
        ...produtoFour, count: (produtoFour.count - valor),
        produtoFour, pgtoDn: (produtoFour.pgtoDn + produtoFour.preco),
        produtoFour, qtdDn: (produtoFour.qtdDn + valor),
        produtoFour, totalAll: (produtoFour.totalAll = produtoFour.pgtoDn + produtoFour.pgtoCt + produtoFour.preco)
      })
      : false;
    key == prod_five && produtoFive.count >= 1 ?
      setProdutoFive({
        ...produtoFive, count: (produtoFive.count - valor),
        produtoFive, pgtoDn: (produtoFive.pgtoDn + produtoFive.preco),
        produtoFive, qtdDn: (produtoFive.qtdDn + valor),
        produtoFive, totalAll: (produtoFive.totalAll = produtoFive.pgtoDn + produtoFive.pgtoCt + produtoFive.preco)
      })
      : false;
    key == prod_six && produtoSix.count >= 1 ?
      setProdutoSix({
        ...produtoSix, count: (produtoSix.count - valor),
        produtoSix, pgtoDn: (produtoSix.pgtoDn + produtoSix.preco),
        produtoSix, qtdDn: (produtoSix.qtdDn + valor),
        produtoSix, totalAll: (produtoSix.totalAll = produtoSix.pgtoDn + produtoSix.pgtoCt + produtoSix.preco)
      })
      : false;
    
  }

  const setPgtoCt = (key, value) => {
    AsyncStorageSales.setItem(key, value);
  }
  const getPgtoCt = async (key) => {
    const valor = parseInt(await AsyncStorageSales.getItem(key));
    key == prod_one && produtoOne.count >= 1 ?
      setProdutoOne({
        ...produtoOne, count: (produtoOne.count - valor),
        produtoOne, pgtoCt: (produtoOne.pgtoCt + produtoOne.preco),
        produtoOne, qtdCt: (produtoOne.qtdCt + valor),
        produtoOne, totalAll: (produtoOne.totalAll = produtoOne.pgtoCt + produtoOne.pgtoDn + produtoOne.preco)
      })
      : false;
    key == prod_two && produtoTwo.count >= 1 ?
      setProdutoTwo({
        ...produtoTwo, count: (produtoTwo.count - valor),
        produtoTwo, pgtoCt: (produtoTwo.pgtoCt + produtoTwo.preco),
        produtoTwo, qtdCt: (produtoTwo.qtdCt + valor),
        produtoTwo, totalAll: (produtoTwo.totalAll = produtoTwo.pgtoCt + produtoTwo.pgtoDn + produtoTwo.preco)
      })
      : false;
    key == prod_three && produtoThree.count >= 1 ?
      setProdutoThree({
        ...produtoThree, count: (produtoThree.count - valor),
        produtoThree, pgtoCt: (produtoThree.pgtoCt + produtoThree.preco),
        produtoThree, qtdCt: (produtoThree.qtdCt + valor),
        produtoThree, totalAll: (produtoThree.totalAll = produtoThree.pgtoCt + produtoThree.pgtoDn + produtoThree.preco)
      })
      : false;
    key == prod_four && produtoFour.count >= 1 ?
      setProdutoFour({
        ...produtoFour, count: (produtoFour.count - valor),
        produtoFour, pgtoCt: (produtoFour.pgtoCt + produtoFour.preco),
        produtoFour, qtdCt: (produtoFour.qtdCt + valor),
        produtoFour, totalAll: (produtoFour.totalAll = produtoFour.pgtoCt + produtoFour.pgtoDn + produtoFour.preco)
      })
      : false;
    key == prod_five && produtoFive.count >= 1 ?
      setProdutoFive({
        ...produtoFive, count: (produtoFive.count - valor),
        produtoFive, pgtoCt: (produtoFive.pgtoCt + produtoFive.preco),
        produtoFive, qtdCt: (produtoFive.qtdCt + valor),
        produtoFive, totalAll: (produtoFive.totalAll = produtoFive.pgtoCt + produtoFive.pgtoDn + produtoFive.preco)
      })
      : false;
    key == prod_six && produtoSix.count >= 1 ?
      setProdutoSix({
        ...produtoSix, count: (produtoSix.count - valor),
        produtoSix, pgtoCt: (produtoSix.pgtoCt + produtoSix.preco),
        produtoSix, qtdCt: (produtoSix.qtdCt + valor),
        produtoSix, totalAll: (produtoSix.totalAll = produtoSix.pgtoCt + produtoSix.pgtoDn + produtoSix.preco)
      })
      : false;
            
  }        
  async function clearStorag() {
    await AsyncStorage.clear();
  }  
// Função para imprimir um documento usando Print.printAsync.
  const print = async () => {    
    await Print.printAsync({
      html: createDynamicTable(),
      printerUrl: selectedPrinter?.url,    
    });
  }
// a linha 1168 chama a Função para imprimir um arquivo e compartilhá-lo depois.
  const printToFile = async () => {   
    const { uri } = await Print.printToFileAsync({
      html: createDynamicTable(),
    });
    console.log('File has been saved to:', uri);
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  }

  const array = []; // Cria um array vazio chamado 'array'

  if (produtoOne.count > 0) { // Verifica se a quantidade do produto é maior que zero
    array.push({ // Adiciona um objeto ao array
      produt: prod_one, // Atribui o valor de 'prod_one' à chave 'produt' no objeto
      price: " R$ " + produtoOne.preco, // Atribui o preço formatado à chave 'price' no objeto
      abs: produtoOne.abastecimento, // Atribui a quantidade de abastecimento à chave 'abs' no objeto
      notsell: produtoOne.count, // Atribui a quantidade não vendida à chave 'notsell' no objeto
      dnqtd: produtoOne.qtdDn, // Atribui a quantidade vendida em dinheiro à chave 'dnqtd' no objeto
      dnvalor: " R$ " + produtoOne.pgtoDn, // Atribui o valor vendido em dinheiro formatado à chave 'dnvalor' no objeto
      ctqtd: produtoOne.qtdCt, // Atribui a quantidade vendida em cartão à chave 'ctqtd' no objeto
      ctvalor: " R$ " + produtoOne.pgtoCt, // Atribui o valor vendido em cartão formatado à chave 'ctvalor' no objeto      
      total: " R$ " + produtoOne.totalAll // Atribui o total formatado à chave 'total' no objeto
    });
  } 
  
  if (produtoTwo.count > 0) {
    array.push({
      produt: prod_two,
      price: " R$ " + produtoTwo.preco,
      abs: produtoTwo.abastecimento,
      notsell: produtoTwo.count,
      dnqtd: produtoTwo.qtdDn,
      dnvalor: " R$ " + produtoTwo.pgtoDn,
      ctqtd: produtoTwo.qtdCt,
      ctvalor: " R$ " + produtoTwo.pgtoCt,      
      total: " R$ " + produtoTwo.totalAll
    });
  }
  
  if (produtoThree.count > 0) {
    array.push({
      produt: prod_three,
      price: " R$ " + produtoThree.preco,
      abs: produtoThree.abastecimento,
      notsell: produtoThree.count,
      dnqtd: produtoThree.qtdDn,
      dnvalor: " R$ " + produtoThree.pgtoDn,
      ctqtd: produtoThree.qtdCt,
      ctvalor: " R$ " + produtoThree.pgtoCt,      
      total: " R$ " + produtoThree.totalAll
    });
  }
  
  if (produtoFour.count > 0) {
    array.push({
      produt: prod_four,
      price: " R$ " + produtoFour.preco,
      abs: produtoFour.abastecimento,
      notsell: produtoFour.count,
      dnqtd: produtoFour.qtdDn,
      dnvalor: " R$ " + produtoFour.pgtoDn,
      ctqtd: produtoFour.qtdCt,
      ctvalor: " R$ " + produtoFour.pgtoCt,      
      total: " R$ " + produtoFour.totalAll
    });
  }
  
  if (produtoFive.count > 0) {
    array.push({
      produt: prod_five,
      price: " R$ " + produtoFive.preco,
      abs: produtoFive.abastecimento,
      notsell: produtoFive.count,
      dnqtd: produtoFive.qtdDn,
      dnvalor: " R$ " + produtoFive.pgtoDn,
      ctqtd: produtoFive.qtdCt,
      ctvalor: " R$ " + produtoFive.pgtoCt,      
      total: " R$ " + produtoFive.totalAll
    });
  }
  
  if (produtoSix.count > 0) {
    array.push({
      produt: prod_six,
      price: " R$ " + produtoSix.preco,
      abs: produtoSix.abastecimento,
      notsell: produtoSix.count,
      dnqtd: produtoSix.qtdDn,
      dnvalor: " R$ " + produtoSix.pgtoDn,
      ctqtd: produtoSix.qtdCt,
      ctvalor: " R$ " + produtoSix.pgtoCt,      
      total: " R$ " + produtoSix.totalAll
    });
  }   
  var quantidade_total_dn =
    produtoOne.qtdDn +
    produtoTwo.qtdDn +
    produtoThree.qtdDn +
    produtoFour.qtdDn +
    produtoFive.qtdDn +
    produtoSix.qtdDn     

  var valor_total_dn =
    produtoOne.pgtoDn +
    produtoTwo.pgtoDn +
    produtoThree.pgtoDn +
    produtoFour.pgtoDn +
    produtoFive.pgtoDn +
    produtoSix.pgtoDn     

  var quantidade_total_ct =
    produtoOne.qtdCt +
    produtoTwo.qtdCt +
    produtoThree.qtdCt +
    produtoFour.qtdCt +
    produtoFive.qtdCt +
    produtoSix.qtdCt    

  var valor_total_ct =
    produtoOne.pgtoCt +
    produtoTwo.pgtoCt +
    produtoThree.pgtoCt +
    produtoFour.pgtoCt +
    produtoFive.pgtoCt +
    produtoSix.pgtoCt 
  
  var total_nao_vendidos =
    produtoOne.count +
    produtoTwo.count +
    produtoThree.count +
    produtoFour.count +
    produtoFive.count +
    produtoSix.count     

    var valor_total_recebido = valor_total_dn + valor_total_ct ;
    var qtd_abastecido = quantidade_total_dn + quantidade_total_ct + total_nao_vendidos ; 

// Este código JavaScript cria uma tabela HTML dinâmica e gera um relatório de vendas
// com base nos dados contidos no array na linha 455
    const createDynamicTable = () => {
      var table = "";  
      for (let i in array) {  
          const item = array[i];
          table = table +
              `
       <tr>
           <td>${item.produt}</td>
           <td>${item.price}</td>
           <td>${item.abs}</td>
           <td>${item.notsell}</td>
           <td colspan="3">${item.dnqtd}</td>
           <td colspan="4">${item.dnvalor}</td>
           <td colspan="3">${item.ctqtd}</td>
           <td colspan="4">${item.ctvalor}</td>           
           <td>${item.total}</td>
        </tr>
      `;
    }
    // O código HTML resultante representa uma tabela de relatório de vendas com várias colunas,
    // onde cada linha corresponde a um item no array array.  
    const html = `
    <!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" /> 
  <style>
    #div {
      width: 1000px;
      height: 800px;
      background-color: rgba(217, 228, 241, 1);
      padding: 20px;
      margin-left: 10px;
      margin-top: 80px;
    }
    table {
      height: auto;
      width: 98%;
      padding: 5px;
      border-collapse: separate;
      border-spacing: 2px;
      background-color: rgba(255, 255, 255, 0.7);
      margin: 10px;
    }
    th {
      font-size: 1.6em;
      text-transform: capitalize;
      color: rgba(56, 77, 100, 0.9);
      background-color: rgba(176, 190, 215, 1);
    }
    tr,
    td {
      border: 2px solid rgba(176, 190, 215, 1);
      text-align: center;
      font-family: 'Open Sans', sans-serif;
      font-weight: bold;
      font-size: 1.1em;
      line-height: 1.66667em;
      color: rgba(56, 77, 100, 0.8);
      text-transform: capitalize;
      padding: 2px;
    }

    /* Defina uma única cor de fundo para as células "Dinheiro e Pix" e "Cartão" na tabela "Vendidos" */
    .vendidos-cell {
      background-color: rgba(217, 228, 241, 1);
    }

    /* Defina uma única cor de fundo para as células "qtd" e "valor" de "Dinheiro e Pix" e "Cartão" */
    .dinheiro-cartao-cell {
      background-color: rgba(217, 228, 241, 1);
    }
  </style>   
</head>    
<body style="text-align: center;">   
  <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
    LJ Supremo Sabor
  </h1> 
  /*As células da tabela têm cores de fundo diferentes, conforme especificado no estilo embutido,*/
  /* e os totais são exibidos no rodapé da tabela.*/             
  <div id="div">
    <table>  
      <colgroup>
        <col />
        <col />
        <col />
        <col />
        <col style="background-color: rgba(204, 214, 231, 1);"> <!-- Cor de fundo mais clara -->
        <col />
        <col />
        <col style="background-color: rgba(204, 214, 231, 1);"> <!-- Cor de fundo mais clara -->
        <col />
        <col />             
        <col style="background-color: rgba(248, 222, 223, 1);"> <!-- Cor de fundo mais clara -->
        <col />
        <col />             
        <col style="background-color: rgba(248, 222, 223, 1);"> <!-- Cor de fundo mais clara -->
        <col />
        <col />
        <col />
        <col style="background-color: rgba(214, 240, 249, 1);"> <!-- Cor de fundo mais clara -->       
      </colgroup>  
      <thead>
        <tr>
          <td colspan="20">${today}</td>
        </tr>
        <tr>
          <th colspan="20">Relatório de Vendas</th>
        </tr>
        <tr>
          <td colspan="1" rowspan="3">Produto</td>
          <td colspan="1" rowspan="3">Preço</td>
          <td colspan="1" rowspan="3">Abastecimento</td>
          <td colspan="1" rowspan="3">não vendidos</td>
          <td colspan="14" class="vendidos-cell">Vendidos</td> <!-- Cor de fundo definida aqui -->
          <td colspan="1" rowspan="3">Total</td>
        </tr>
        <tr>
          <td colspan="7" class="vendidos-cell">Dinheiro e Pix</td> <!-- Cor de fundo definida aqui -->
          <td colspan="7" class="vendidos-cell">Cartão</td> <!-- Cor de fundo definida aqui -->             
        </tr>
        <tr>
          <td colspan="3" class="dinheiro-cartao-cell">qtd</td> <!-- Cor de fundo definida aqui -->
          <td colspan="4" class="dinheiro-cartao-cell">valor</td> <!-- Cor de fundo definida aqui -->
          <td colspan="3" class="dinheiro-cartao-cell">qtd</td> <!-- Cor de fundo definida aqui -->
          <td colspan="4" class="dinheiro-cartao-cell">valor</td> <!-- Cor de fundo definida aqui -->
        </tr>             
      </thead> 
      <tbody id="tbody" style="color:rgba(56, 77, 100, 0.8);">
        <tr>
          ${table}
        </tr>             
      </tbody>
      <tfoot>             
        <tr>
          <td colspan="2">Totais</td>
          <td>${qtd_abastecido}</td>
          <td>${total_nao_vendidos}</td>     
          <td colspan="3">${quantidade_total_dn}</td>
          <td colspan="4">R$ ${valor_total_dn}</td>
          <td colspan="3">${quantidade_total_ct}</td>
          <td colspan="4">R$ ${valor_total_ct}</td>                
          <td colspan="1">R$ ${valor_total_recebido}</td>
        </tr>
      </tfoot>  
    </table>  
  </div>  
</body>
</html>  
    
   `;
    return html;
  }
  return (

    <SafeAreaView style={Estilos.containnerBody}>
      <ScrollView >
        {/* header */}
        <LinearGradient
          colors={['rgba(251, 195, 95, 1.0)', 'rgba(251, 195, 95, 0.5)']} style={{ flex: 1 }}>
          <View style={Estilos.viewHeader}>
            <View style={Estilos.viewImgHeader}>
              <Image
                source={require('../assets/logo.jpg')}
                style={Estilos.imgHeader}
              />
            </View>
            <Text style={Estilos.textHeader}>LJ Supremo Sabor</Text>
          </View>
        </LinearGradient>
        <LinearGradient
          colors={['rgba(111, 0, 0, 1)', 'rgba(140, 51, 51,0.8)', 'rgba(115, 0, 0, 0.7)']} style={{ flex: 1 }}>

          <View style={Estilos.containnerMain}>
            {/* produto_one 1*/}
            <View style={Estilos.containnerProduto}>
              <View style={Estilos.viewAbastecer}>
                <Image
                  source={require('../assets/frango.png')}
                  style={Estilos.viewAbastecerImg} />
                <LinearGradient
                  colors={['#a73737', '#F00000']} style={Estilos.gradientTouchXL}>
                  <TouchableOpacity onPress={(value) =>
                    setAbastecer(prod_one, produtoOne.abastecimento) & getAbastecer(prod_one)}>
                    <Text style={Estilos.touchText}>Abastecer</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchM}>
                  <TouchableOpacity onPress={(value) => setZerar(prod_one, "0") & getZerar(prod_one)}>
                    <Text style={Estilos.touchText}>zerar</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchS}>
                  <TouchableOpacity onPress={(value) => setAdd(prod_one, "1") & getAdd(prod_one)}>
                    <Text style={Estilos.touchText}>+ 1</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchS}>
                  <TouchableOpacity onPress={(value) => setRemove(prod_one, "1") & getRemove(prod_one)}>
                    <Text style={Estilos.touchText}>- 1</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
              <View style={Estilos.viewInfo}>
                <Text style={Estilos.textInfo}>{`  Disponivel :  ${produtoOne.count} ${prod_one}(s) `}</Text>
              </View>
              <View style={Estilos.viewVendas}>
                <Text style={Estilos.textVendas}>Vendas</Text>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchL}>
                  <TouchableOpacity onPress={(value) => setPgtoDn(prod_one, "1") & getPgtoDn(prod_one)}>
                    <Text style={Estilos.touchText}>Dinheiro e Pix</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchL}>
                  <TouchableOpacity onPress={(value) => setPgtoCt(prod_one, "1") & getPgtoCt(prod_one)}>
                    <Text style={Estilos.touchText}>Cartão</Text>
                  </TouchableOpacity>
                </LinearGradient>                
              </View>
              <View style={Estilos.viewSubTotal}>
                <Text style={Estilos.textInfo}>{`Valor em dinheiro e Pix R$ ${produtoOne.pgtoDn},00  ${produtoOne.qtdDn}  vendas`}</  Text>
                <Text style={Estilos.textInfo}>{`Valor em cartão R$ ${produtoOne.pgtoCt},00  ${produtoOne.qtdCt}  vendas`}</Text>                
              </View>
            </View>

            {/* produto_two 2*/}
            <View style={Estilos.containnerProduto}>
              <View style={Estilos.viewAbastecer}>
                <Image
                  source={require('../assets/churrasco.png')}
                  style={Estilos.viewAbastecerImg}
                />
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchXL}>
                  <TouchableOpacity onPress={(value) =>
                    setAbastecer(prod_two, produtoTwo.abastecimento) & getAbastecer(prod_two)}>
                    <Text style={Estilos.touchText}>Abastecer</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchM}>
                  <TouchableOpacity onPress={(value) =>
                    setZerar(prod_two, "0") & getZerar(prod_two)}>
                    <Text style={Estilos.touchText}>zerar</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchS}>
                  <TouchableOpacity onPress={(value) => setAdd(prod_two, "1") & getAdd(prod_two)}>
                    <Text style={Estilos.touchText}>+ 1</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchS}>
                  <TouchableOpacity onPress={(value) =>
                    setRemove(prod_two, "1") & getRemove(prod_two)}>
                    <Text style={Estilos.touchText}>- 1</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
              <View style={Estilos.viewInfo}>
                <Text style={Estilos.textInfo}>{`  Disponivel : ${produtoTwo.count} ${prod_two}(s)`}</Text>
              </View>
              <View style={Estilos.viewVendas}>
                <Text style={Estilos.textVendas}>Vendas</Text>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchL}>
                  <TouchableOpacity onPress={(value) => setPgtoDn(prod_two, "1") & getPgtoDn(prod_two)}>
                    <Text style={Estilos.touchText}>Dinheiro e Pix</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchL}>
                  <TouchableOpacity onPress={(value) => setPgtoCt(prod_two, "1") & getPgtoCt(prod_two)}>
                    <Text style={Estilos.touchText}>Cartão</Text>
                  </TouchableOpacity>
                </LinearGradient>                
              </View>
              <View style={Estilos.viewSubTotal}>
                <Text style={Estilos.textInfo}>{`Valor em dinheiro e Pix R$ ${produtoTwo.pgtoDn},00  ${produtoTwo.qtdDn}  vendas`}</  Text>
                <Text style={Estilos.textInfo}>{`Valor em cartão R$ ${produtoTwo.pgtoCt},00  ${produtoTwo.qtdCt}  vendas`}</Text>                
              </View>
            </View>

            {/* produto_three 3*/}
            <View style={Estilos.containnerProduto}>
              <View style={Estilos.viewAbastecer}>
                <Image
                  source={require('../assets/feijoada.jpg')}
                  style={Estilos.viewAbastecerImg}
                />
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchXL}>
                  <TouchableOpacity onPress={(value) =>
                    setAbastecer(prod_three, produtoThree.abastecimento) & getAbastecer(prod_three)}>
                    <Text style={Estilos.touchText}>Abastecer</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchM}>
                  <TouchableOpacity onPress={(value) =>
                    setZerar(prod_three, "0") & getZerar(prod_three)}>
                    <Text style={Estilos.touchText}>zerar</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchS}>
                  <TouchableOpacity onPress={(value) => setAdd(prod_three, "1") & getAdd(prod_three)}>
                    <Text style={Estilos.touchText}>+ 1</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchS}>
                  <TouchableOpacity onPress={(value) => setRemove(prod_three, "1") & getRemove(prod_three)}>
                    <Text style={Estilos.touchText}>- 1</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
              <View style={Estilos.viewInfo}>
                <Text style={Estilos.textInfo}>{`  Disponivel :  ${produtoThree.count} ${prod_three}(s)  `}</Text>
              </View>
              <View style={Estilos.viewVendas}>
                <Text style={Estilos.textVendas}>Vendas</Text>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchL}>
                  <TouchableOpacity onPress={(value) => setPgtoDn(prod_three, "1") & getPgtoDn(prod_three)}>
                    <Text style={Estilos.touchText}>Dinheiro e Pix</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchL}>
                  <TouchableOpacity onPress={(value) => setPgtoCt(prod_three, "1") & getPgtoCt(prod_three)}>
                    <Text style={Estilos.touchText}>Cartão</Text>
                  </TouchableOpacity>
                </LinearGradient>                
              </View>
              <View style={Estilos.viewSubTotal}>
                <Text style={Estilos.textInfo}>{`Valor em dinheiro e Pix ${produtoThree.pgtoDn},00  ${produtoThree.qtdDn}  vendas`}</  Text>
                <Text style={Estilos.textInfo}>{`Valor em cartão R$ ${produtoThree.pgtoCt},00  ${produtoThree.qtdCt}  vendas`}</Text>                
              </View>
            </View>

            {/* produto_four 4*/}
            <View style={Estilos.containnerProduto}>
              <View style={Estilos.viewAbastecer}>
                <Image
                  source={require('../assets/rabada.jpg')}
                  style={Estilos.viewAbastecerImg}
                />
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchXL}>
                  <TouchableOpacity onPress={(value) =>
                    setAbastecer(prod_four, produtoFour.abastecimento) & getAbastecer(prod_four)}>
                    <Text style={Estilos.touchText}>Abastecer</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchM}>
                  <TouchableOpacity onPress={(value) => setZerar(prod_four, "0") & getZerar(prod_four)}>
                    <Text style={Estilos.touchText}>zerar</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchS}>
                  <TouchableOpacity onPress={(value) => setAdd(prod_four, "1") & getAdd(prod_four)}>
                    <Text style={Estilos.touchText}>+ 1</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchS}>
                  <TouchableOpacity onPress={(value) => setRemove(prod_four, "1") & getRemove(prod_four)}>
                    <Text style={Estilos.touchText}>- 1</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
              <View style={Estilos.viewInfo}>
                <Text style={Estilos.textInfo}>{`  Disponivel :  ${produtoFour.count} ${prod_four}(s) `}</Text>
              </View>

              <View style={Estilos.viewVendas}>
                <Text style={Estilos.textVendas}>Vendas</Text>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchL}>
                  <TouchableOpacity onPress={(value) => setPgtoDn(prod_four, "1") & getPgtoDn(prod_four)}>
                    <Text style={Estilos.touchText}>Dinheiro e Pix</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchL}>
                  <TouchableOpacity onPress={(value) => setPgtoCt(prod_four, "1") & getPgtoCt(prod_four)}>
                    <Text style={Estilos.touchText}>Cartão</Text>
                  </TouchableOpacity>
                </LinearGradient>                
              </View>
              <View style={Estilos.viewSubTotal}>
                <Text style={Estilos.textInfo}>{`Valor em dinheiro e Pix R$ ${produtoFour.pgtoDn},00  ${produtoFour.qtdDn}  vendas`}</  Text>
                <Text style={Estilos.textInfo}>{`Valor em cartão R$ ${produtoFour.pgtoCt},00  ${produtoFour.qtdCt}  vendas`}</Text>                
              </View>
            </View>

            {/* produto_five 5*/}
            <View style={Estilos.containnerProduto}>
              <View style={Estilos.viewAbastecer}>
                <Image
                  source={require('../assets/mista.jpg')}
                  style={Estilos.viewAbastecerImg}
                />
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchXL}>
                  <TouchableOpacity onPress={(value) => setAbastecer(prod_five, produtoFive.abastecimento) & getAbastecer(prod_five)}>
                    <Text style={Estilos.touchText}>Abastecer</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchM}>
                  <TouchableOpacity onPress={(value) => setZerar(prod_five, "0") & getZerar(prod_five)}>
                    <Text style={Estilos.touchText}>zerar</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchS}>
                  <TouchableOpacity onPress={(value) => setAdd(prod_five, "1") & getAdd(prod_five)}>
                    <Text style={Estilos.touchText}>+ 1</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchS}>
                  <TouchableOpacity onPress={(value) => setRemove(prod_five, "1") & getRemove(prod_five)}>
                    <Text style={Estilos.touchText}>- 1</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
              <View style={Estilos.viewInfo}>
                <Text style={Estilos.textInfo}>{`  Disponivel :  ${produtoFive.count}  ${prod_five}(s) `}</Text>
              </View>
              <View style={Estilos.viewVendas}>
                <Text style={Estilos.textVendas}>Vendas</Text>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchL}>
                  <TouchableOpacity onPress={(value) => setPgtoDn(prod_five, "1") & getPgtoDn(prod_five)}>
                    <Text style={Estilos.touchText}>Dinheiro e Pix</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchL}>
                  <TouchableOpacity onPress={(value) => setPgtoCt(prod_five, "1") & getPgtoCt(prod_five)}>
                    <Text style={Estilos.touchText}>Cartão</Text>
                  </TouchableOpacity>
                </LinearGradient>               
              </View>
              <View style={Estilos.viewSubTotal}>
                <Text style={Estilos.textInfo}>{`Valor em dinheiro e Pix R$ ${produtoFive.pgtoDn},00  ${produtoFive.qtdDn}  vendas`}</  Text>
                <Text style={Estilos.textInfo}>{`Valor em cartão R$ ${produtoFive.pgtoCt},00  ${produtoFive.qtdCt}  vendas`}</Text>                
              </View>
            </View>

            {/* produto_six 6*/}
            <View style={Estilos.containnerProduto}>
              <View style={Estilos.viewAbastecer}>
                <Image
                  source={require('../assets/carnedepanela.jpg')}
                  style={Estilos.viewAbastecerImg}
                />
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchXL}>
                  <TouchableOpacity onPress={(value) => setAbastecer(prod_six, produtoSix.abastecimento) & getAbastecer(prod_six)}>
                    <Text style={Estilos.touchText}>Abastecer</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchM}>
                  <TouchableOpacity onPress={(value) => setZerar(prod_six, "0") & getZerar(prod_six)}>
                    <Text style={Estilos.touchText}>zerar</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchS}>
                  <TouchableOpacity onPress={(value) => setAdd(prod_six, "1") & getAdd(prod_six)}>
                    <Text style={Estilos.touchText}>+ 1</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchS}>
                  <TouchableOpacity onPress={(value) => setRemove(prod_six, "1") & getRemove(prod_six)}>
                    <Text style={Estilos.touchText}>- 1</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
              <View style={Estilos.viewInfo}>
                <Text style={Estilos.textInfo}>{`  Disponivel :  ${produtoSix.count}  ${prod_six}(s) `}</Text>
              </View>
              <View style={Estilos.viewVendas}>
                <Text style={Estilos.textVendas}>Vendas</Text>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchL}>
                  <TouchableOpacity onPress={(value) => setPgtoDn(prod_six, "1") & getPgtoDn(prod_six)}>
                    <Text style={Estilos.touchText}>Dinheiro e Pix</Text>
                  </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                  colors={['#a73737', '#F00000']}
                  style={Estilos.gradientTouchL}>
                  <TouchableOpacity onPress={(value) => setPgtoCt(prod_six, "1") & getPgtoCt(prod_six)}>
                    <Text style={Estilos.touchText}>Cartão</Text>
                  </TouchableOpacity>
                </LinearGradient>                
              </View>
              <View style={Estilos.viewSubTotal}>
                <Text style={Estilos.textInfo}>{`Valor em dinheiro e Pix R$ ${produtoSix.pgtoDn},00  ${produtoSix.qtdDn}  vendas`}</  Text>
                <Text style={Estilos.textInfo}>{`Valor em cartão R$ ${produtoSix.pgtoCt},00  ${produtoSix.qtdCt}  vendas`}</Text>                
              </View>
            </View>       
                       
            <View style={Estilos.viewAmount}>
              <Text style={Estilos.textInfo}>
                {`Valor total Dinheiro e PixR$ ${produtoOne.pgtoDn +
                  produtoTwo.pgtoDn +
                  produtoThree.pgtoDn +
                  produtoFour.pgtoDn +
                  produtoFive.pgtoDn +
                  produtoSix.pgtoDn                  
                  },00 `}
              </Text>
              <Text style={Estilos.textInfo}>
                {`Valor total Cartões R$ ${produtoOne.pgtoCt +
                  produtoTwo.pgtoCt +
                  produtoThree.pgtoCt +
                  produtoFour.pgtoCt +
                  produtoFive.pgtoCt +
                  produtoSix.pgtoCt                   
                  },00 `}
              </Text>            
              <Text style={Estilos.textInfo}>
                {`Valor total R$ ${produtoOne.totalAll +
                  produtoTwo.totalAll +
                  produtoThree.totalAll +
                  produtoFour.totalAll +
                  produtoFive.totalAll +
                  produtoSix.totalAll                   
                  },00 `}
              </Text>
            </View>
            
            <View style={Estilos.viewShare}>
              <TouchableOpacity
                onPress={printToFile} style={Estilos.viewShare}>
                <Ionicons name={"share"} size={40} color={"#FFC133"} />
              </TouchableOpacity>
              <TouchableOpacity onPress={print} style={Estilos.viewShare}>
                <Ionicons name={"print"} size={40} color={"#FFC133"} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={(value) =>
                  setZerar(prod_one, "0") & getZerar(prod_one) &
                  setZerar(prod_two, "0") & getZerar(prod_two) &
                  setZerar(prod_three, "0") & getZerar(prod_three) &
                  setZerar(prod_four, "0") & getZerar(prod_four) &
                  setZerar(prod_five, "0") & getZerar(prod_five) &
                  setZerar(prod_six, "0") & getZerar(prod_six) &                 
                  clearStorag
                }
                style={Estilos.viewShare}>
                <Ionicons name={"power"} size={40} color={"#FFC133"} />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}