/*Arquivo Javascript*/

//FUNÇÃO QUE VERIFICA A TAB CLICADA//
	function ver_tab(e){

		//Verifica e altera no menu superior//
			//Botao inicio foi clicado
			if(e=='bt_inicio')
			{
				//Remove as outras divs e mantem somente a div INICIO//
				/*Explicação: Encontra o elemento que contem a classe (.h_algumacoisa) e seta o dislpay dele como none*/
				$('.h_quem_somos').css("display","none");
				$('.h_graficos').css("display","none");
				$('.h_detalhes').css("display","none");

				//Faz aparecer a div inicio
				/*Explicação: Faz o elemento que contém a classe .h_algumacoisa, aparecer através do método fadeIn, na velocidade 'slow'
				  Esse método é do Jquery, e facilita o trabalho, em javascript puro você teria que aumentar um pouco de opacidade do elemento
				  por milésimo de segundo, pra dar o efeito de aparecer... só pra fazer uma analogia.
				*/
				$('.h_inicio').fadeIn('slow');

				//Altera as cores dos botoes para indiciar o click
				$('li #bt_detalhes').css("background","rgba(66, 66, 66, .0)");
				$('li #bt_graficos').css("background","rgba(66, 66, 66, .0)");
				$('li #bt_quem_somos').css("background","rgba(66, 66, 66, .0)");
				$('li #bt_inicio').css("background","rgba(66, 66, 66, .5)");
			}
			//Botao quem somos foi clicado
			else if(e=='bt_quem_somos')
			{
				//Remove as outras divs e mantem somente a div Quem somos//
				$('.h_inicio').css("display","none");
				$('.h_graficos').css("display","none");
				$('.h_detalhes').css("display","none");

				//Faz aparecer a div Quem somos
				// $('.h_quem_somos').css("display","block");
				$('.h_quem_somos').fadeIn('slow');

				//Altera as cores dos botoes para indiciar o click
				$('li #bt_detalhes').css("background","rgba(66, 66, 66, .0)");
				$('li #bt_graficos').css("background","rgba(66, 66, 66, .0)");
				$('li #bt_quem_somos').css("background","rgba(66, 66, 66, .5)");
				$('li #bt_inicio').css("background","rgba(66, 66, 66, .0)");
			}
			else if(e=='bt_graficos')
			//Clicou em Graficos
			{
				//Remove as outras divs e mantem somente a div Grafico//
				$('.h_inicio').css("display","none");
				$('.h_quem_somos').css("display","none");
				$('.h_detalhes').css("display","none");

				//Faz aparecer a div Graficos
				$('.h_graficos').fadeIn('slow');

				//Altera as cores dos botoes para indiciar o click
				$('li #bt_detalhes').css("background","rgba(66, 66, 66, .0)");
				$('li #bt_graficos').css("background","rgba(66, 66, 66, .5)");
				$('li #bt_quem_somos').css("background","rgba(66, 66, 66, .0)");
				$('li #bt_inicio').css("background","rgba(66, 66, 66, .0)");			
			}
			else if(e=='bt_detalhes')
			//Clicou em Detalhes
			{
				//Remove as outras divs e mantem somente a div Detalhes//
				$('.h_inicio').css("display","none");
				$('.h_quem_somos').css("display","none");
				$('.h_graficos').css("display","none");

				//Faz aparecer a div Detalhes
				$('.h_detalhes').fadeIn('slow');

				//Altera as cores dos botoes para indiciar o click
				$('li #bt_detalhes').css("background","rgba(66, 66, 66, .5)");
				$('li #bt_graficos').css("background","rgba(66, 66, 66, .0)");
				$('li #bt_quem_somos').css("background","rgba(66, 66, 66, .0)");
				$('li #bt_inicio').css("background","rgba(66, 66, 66, .0)");
			};
		//-Fim menu superior-//
	

		//Verifica e altera no menu lateral//	
			//Se qualquer tag <a> dentro da tag <li> que esta dentro da tag <ul>(que tem a classe men_lateral) for clicada, faça.
			$('ul.men_lateral li a').on('click',function(){

				//Pule duas casas pra cima, ou seja, pule de <a> para <li>, depois de <li> para <ul>, agora procure TODOS <li> e pinte de transparente//
				$(this).parent().parent().find('li').css("background","rgba(229, 115, 115, .0)")
				//Suba da tag <a> para a tag <li>, pinte somente a tag <li> clicada//
				$(this).parent().css("background", "rgb(189, 189, 189,.5)");
			});
		//--//

	}
//FIM DA FUNÇÃO TAB//

//FUNÇÕES QUE GERAM OS GRÁFICOS//

	//Condição Gráfico Faixa Etária//
		function graf_etaria(ate_20,entre_21e30,entre_31e40,acima_40){

			//Espera 1 segundo para imprimir o gráfico na tela//
			setTimeout(function(id){

				var ctx = document.getElementById('graf_etaria').getContext('2d');

				Chart.defaults.global.defaultFontSize = 16;
				
				var myChart = new Chart(ctx, {
				    type: 'pie',
				    data: {
				        labels: ['Até 20 Anos', 'De 21 a 30 Anos', 'De 31 a 40 Anos', 'Acima de 40'],
				        datasets: [{
				            label: '# of Votes',
				            data: [ate_20, entre_21e30, entre_31e40, acima_40],  //Faixas da Pizza
				            //Se você for adicionar uma faixa nova na pizza, deve ser addicionada uma cor nova, indice novo e uma border nova//
				            backgroundColor: [
				                'rgba(97, 97, 97, 1)', //Cores de fundo da Pizza (cuidado com as virgulas)
								'rgba(229, 115, 115, 1)',
								'rgba(66, 66, 66, 1)',
				                'rgba(63, 81, 181, 1)'
				            ],
				            borderColor: [
				                'rgba(225, 225, 225, 1)',
				                'rgba(225, 225, 225, 1)',
				                'rgba(225, 225, 225, 1)',
				                'rgba(225, 225, 225, 1)'
				            ],
				            borderWidth: 2
				        }]
				    },
				    options: {
				    	title: {
				            display: true,
				            text: 'Faixa Etaria'  //Titulo do gráfico
				        },
				    	layout: {
				    		padding: {
				    			left:0,
				    			right:0,
				    			top:10,
				    			bottom:0
				    		}
				    	},
				    	legend: {
				    		display: true,
				    		position: 'right',  //Alinhamento da legenda
				    		fullWidth: true,
				    		labels : {
				    			fontColor: '#000' //Cor da fonte da legenda
				    		}
				    	}
				    }
				});	
			},1000);
		};
	//--//

	//Condição Gráfico Estado Civil//
		function graf_civil(casado,solteiro,outros){

			//Espera 1 segundo para imprimir o gráfico na tela//
			setTimeout(function(id){

				var ctx = document.getElementById('graf_civil').getContext('2d');

				Chart.defaults.global.defaultFontSize = 16;
				
				var myChart = new Chart(ctx, {
				    type: 'pie',
				    data: {
				        labels: ['Casado', 'Solteiros', 'Outros'],
				        datasets: [{
				            label: '# of Votes',
				            data: [casado, solteiro, outros],  //Faixas da Pizza
				            //Se você for adicionar uma faixa nova na pizza, deve ser addicionada uma cor nova, indice novo e uma border nova//
				            backgroundColor: [
				                'rgba(97, 97, 97, 1)', //Cores de fundo da Pizza (cuidado com as virgulas)
				                'rgba(78, 0, 3, 1)',
				                'rgba(63, 81, 181, 1)'
				            ],
				            borderColor: [
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)'
				            ],
				            borderWidth: 2
				        }]
				    },
				    options: {
				    	title: {
				            display: true,
				            text: 'Estado Civil'  //Titulo do gráfico
				        },
				    	layout: {
				    		padding: {
				    			left:0,
				    			right:0,
				    			top:10,
				    			bottom:0
				    		}
				    	},
				    	legend: {
				    		display: true,
				    		position: 'right',  //Alinhamento da legenda
				    		fullWidth: true,  //Alinhamento da legenda
				    		labels : {
				    			fontColor: '#000' //Cor da fonte da legenda
				    		}
				    	}
				    }
				});	
			},1000);
		};
	//--//

	//Condição Gráfico Tem Filhos//
		function graf_filhos(pfilho1,pfilho2,pfilho3,pfilho4,pfilho5,pnfilho){

			//Espera 1 segundo para imprimir o gráfico na tela//
			setTimeout(function(id){

				var ctx = document.getElementById('graf_filhos').getContext('2d');

				Chart.defaults.global.defaultFontSize = 16;
				
				var myChart = new Chart(ctx, {
				    type: 'pie',
				    data: {
				        labels: ['Possui 1', 'Possui 2', 'Possui 3', 'Possui 4', 'Possui 5 ou mais', 'Não Tem'],
				        datasets: [{
				            label: '# of Votes',
				            data: [pfilho1,pfilho2,pfilho3,pfilho4,pfilho5,pnfilho],  //Faixas da Pizza
				            //Se você for adicionar uma faixa nova na pizza, deve ser addicionada uma cor nova, indice novo e uma border nova//
				            backgroundColor: [
				                'rgba(26, 35, 126, 1)', //Cores de fundo da Pizza (cuidado com as virgulas)
				                'rgba(239, 154, 154, 1)',
				                'rgba(83, 109, 254, 1)',
				                'rgba(66, 66, 66, 1)',
				                'rgba(166, 28, 28, 1)',
				                'rgba(189, 189, 189, 1)'
				            ],
				            borderColor: [
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)'
				            ],
				            borderWidth: 2
				        }]
				    },
				    options: {
				    	title: {
				            display: true,
				            text: 'Possui Filhos'  //Titulo do gráfico
				        },
				    	layout: {
				    		padding: {
				    			left:0,
				    			right:0,
				    			top:10,
				    			bottom:0
				    		}
				    	},
				    	legend: {
				    		display: true,
				    		position: 'right',  //Alinhamento da legenda
				    		fullWidth: true,  //Alinhamento da legenda
				    		labels : {
				    			fontColor: '#000' //Cor da fonte da legenda
				    		}
				    	}
				    }
				});	
			},1000);
		};
	//--//

	//Condição Gráfico Reside em Franca//
		function graf_reside(sim,nao){

			//Espera 1 segundo para imprimir o gráfico na tela//
			setTimeout(function(id){

				var ctx = document.getElementById('graf_reside_franca').getContext('2d');

				Chart.defaults.global.defaultFontSize = 16;
				
				var myChart = new Chart(ctx, {
				    type: 'pie',
				    data: {
				        labels: ['Sim', 'Não'],
				        datasets: [{
				            label: '# of Votes',
				            data: [sim,nao],  //Faixas da Pizza
				            //Se você for adicionar uma faixa nova na pizza, deve ser addicionada uma cor nova, indice novo e uma border nova//
				            backgroundColor: [
				                'rgba(165, 28, 28, 1)', //Cores de fundo da Pizza (cuidado com as virgulas)
				                'rgba(63, 81, 181, 1)'
				            ],
				            borderColor: [
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)'
				            ],
				            borderWidth: 2
				        }]
				    },
				    options: {
				    	title: {
				            display: true,
				            text: 'Reside em Franca'  //Titulo do gráfico
				        },
				    	layout: {
				    		padding: {
				    			left:0,
				    			right:0,
				    			top:10,
				    			bottom:0
				    		}
				    	},
				    	legend: {
				    		display: true,
				    		position: 'right',  //Alinhamento da legenda
				    		fullWidth: true,  //Alinhamento da legenda
				    		labels : {
				    			fontColor: '#000' //Cor da fonte da legenda
				    		}
				    	}
				    }
				});	
			},1000);
		};
	//--//

	//Condição Gráfico Distância da FATEC//
		function graf_distancia(pate1,pentre1e3,pentre3e5,pentre5e10,pmaisde10){

			//Espera 1 segundo para imprimir o gráfico na tela//
			setTimeout(function(id){

				var ctx = document.getElementById('graf_distancia').getContext('2d');

				Chart.defaults.global.defaultFontSize = 16;
				
				var myChart = new Chart(ctx, {
				    type: 'pie',
				    data: {
				        labels: ['Até 1 km', 'Entre 1 e 5 km', 'Entre 3 e 5 km', 'Entre 5 e 10 km', 'Mais de 10 km'],
				        datasets: [{
				            label: '# of Votes',
				            data: [pate1,pentre1e3,pentre3e5,pentre5e10,pmaisde10],  //Faixas da Pizza
				            //Se você for adicionar uma faixa nova na pizza, deve ser addicionada uma cor nova, indice novo e uma border nova//
				            backgroundColor: [
				                'rgba(239, 154, 159, 1)', //Cores de fundo da Pizza (cuidado com as virgulas)
				                'rgba(97, 97, 97, 1)',
				                'rgba(78, 0, 3, 1)',
				                'rgba(189, 189, 189, 1)',
				                'rgba(26, 35, 126, 1)'
				            ],
				            borderColor: [
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)'
				            ],
				            borderWidth: 2
				        }]
				    },
				    options: {
				    	title: {
				            display: true,
				            text: 'Distância da Fatec'  //Titulo do gráfico
				        },
				    	layout: {
				    		padding: {
				    			left:0,
				    			right:0,
				    			top:10,
				    			bottom:0
				    		}
				    	},
				    	legend: {
				    		display: true,
				    		position: 'right',  //Alinhamento da legenda
				    		fullWidth: true,  //Alinhamento da legenda
				    		labels : {
				    			fontColor: '#000' //Cor da fonte da legenda
				    		}
				    	}
				    }
				});	
			},1000);
		};
	//--//

	//Condição Gráfico Locomoção//
		function graf_locomocao(ponibus,pvan,pcarro,pmoto,pbicicleta,pa_pe){

			//Espera 1 segundo para imprimir o gráfico na tela//
			setTimeout(function(id){

				var ctx = document.getElementById('graf_locomocao').getContext('2d');

				Chart.defaults.global.defaultFontSize = 16;
				
				var myChart = new Chart(ctx, {
				    type: 'pie',
				    data: {
				        labels: ['Onibus', 'Van', 'Carro', 'Moto', 'Bicicleta', 'A pé'],
				        datasets: [{
				            label: '# of Votes',
				            data: [ponibus,pvan,pcarro,pmoto,pbicicleta,pa_pe],  //Faixas da Pizza
				            //Se você for adicionar uma faixa nova na pizza, deve ser addicionada uma cor nova, indice novo e uma border nova//
				            backgroundColor: [
				                'rgba(165, 28, 28, 1)', //Cores de fundo da Pizza (cuidado com as virgulas)
				                'rgba(97, 97, 97, 1)',
				                'rgba(63, 81, 181, 1)',
				                'rgba(239, 154, 159, 1)',
				                'rgba(189, 189, 189, 1)',
				                'rgba(99, 140, 254, 1)'
				            ],
				            borderColor: [
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)'
				            ],
				            borderWidth: 2
				        }]
				    },
				    options: {
				    	title: {
				            display: true,
				            text: 'Locomoção'  //Titulo do gráfico
				        },
				    	layout: {
				    		padding: {
				    			left:0,
				    			right:0,
				    			top:10,
				    			bottom:0
				    		}
				    	},
				    	legend: {
				    		display: true,
				    		position: 'right',  //Alinhamento da legenda
				    		fullWidth: true,  //Alinhamento da legenda
				    		labels : {
				    			fontColor: '#000' //Cor da fonte da legenda
				    		}
				    	}
				    }
				});	
			},1000);
		};
	//--//

	//Condição Gráfico Situação Residencia//
		function graf_situacao_residencia(ptpropria,ptalugada,ptfinanciada,ptoutro,ppropria,palugada,pfinanciada,poutro){

			//Espera 1 segundo para imprimir o gráfico na tela//
			setTimeout(function(id){

				var ctx = document.getElementById('graf_situacao_residencia').getContext('2d');

				Chart.defaults.global.defaultFontSize = 16;
				
				var myChart = new Chart(ctx, {
				    type: 'bar',
				    data: {
				        labels: ['Menos de 1 Ano','De 1 a 5 Anos','De 5 a 10 Anos', 'Mais de 10 Anos'],
				        datasets: [
				        //Todas as situações - Casa Propria//
				        {
				        	label:['Propria'],
				            data: [ptpropria[0],ptpropria[1],ptpropria[2],ptpropria[3]], 
				          
				            backgroundColor: [
				                '#e53935', 
				                '#e53935',
				                '#e53935',
				                '#e53935'
				            ],
				            borderColor: [
				                '#e53935',
				                '#e53935',
				                '#e53935',
				                '#e53935'
				            ],
				            borderWidth: 1
				        },
				        //Todas as Situações  - Casa Alugada//
				        {
				        	label:['Alugada'],
				            data: [ptalugada[0],ptalugada[1],ptalugada[2],ptalugada[3]],
				            
				            backgroundColor: [
				                '#536dfe',  
				                '#536dfe',
				                '#536dfe',
				                '#536dfe'
				            ],
				            borderColor: [
				                '#536dfe',
				                '#536dfe',
				                '#536dfe',
				                '#536dfe'
				            ],
				            borderWidth: 1
				        },
				        //Todas as Situações - Casa Financiada//
				        {
				        	label:['Financiada'],
				            data: [ptfinanciada[0],ptfinanciada[1],ptfinanciada[2],ptfinanciada[3]],  
				           
				            backgroundColor: [
				                '#424242',
				                '#424242',
				                '#424242',
				                '#424242'
				            ],
				            borderColor: [
				                '#424242',
				                '#424242',
				                '#424242',
				                '#424242'
				            ],
				            borderWidth: 1
				        },
				        //Todas as situações - Outros//
				        {
				        	label:['Outro'],
				            data: [ptoutro[0],ptoutro[1],ptfinanciada[2],ptoutro[3]],  //Faixas da Pizza
				            
				            backgroundColor: [
				                '#ef9a9a',
				                '#ef9a9a',
				                '#ef9a9a',
				                '#ef9a9a'
				            ],
				            borderColor: [
				                '#ef9a9a',
				                '#ef9a9a',
				                '#ef9a9a',
				                '#ef9a9a'
				            ],
				            borderWidth: 1
				        }]
				    },
				    options: {
				    	title: {
				            display: true,
				            text: 'Situação Residencia'  //Titulo do gráfico
				        },
				    	layout: {
				    		padding: {
				    			left:0,
				    			right:0,
				    			top:10,
				    			bottom:0
				    		}
				    	},
				    	legend: {
				    		display: true,
				    		position: 'right',  //Alinhamento da legenda
				    		fullWidth: true,  //Alinhamento da legenda
				    		labels : {
				    			fontColor: '#000', //Cor da fonte da legenda
				    			fontSize:16
				    		},
				    		label: {
				    			display:false
				    		}
				    	},
				    	scales: {
				    		yAxes: [{
				    			display:true,
				    		}]
				    	}
				    }
				});	
			},1000);
		};
	//--//


	//Condição Gráfico Composição Famliar//
		function graf_compo_familiar(pcompo1,pcompo2,pcompo3,pcompo4,pcompo5){

			//Espera 1 segundo para imprimir o gráfico na tela//
			setTimeout(function(id){

				var ctx = document.getElementById('graf_compo_familiar').getContext('2d');

				Chart.defaults.global.defaultFontSize = 16;
				
				var myChart = new Chart(ctx, {
				    type: 'pie',
				    data: {
				        labels: ['Mora com 1 Pessoa','Mora com 2 Pessoas','Mora com 3 Pessoas', 'Mora com 4 Pessoas','Mora com 5 ou Mais'],
				        datasets: [
				        //Todas as situações - Casa Propria//
				        {
				        	label:['# of Votes'],
				            data: [pcompo1,pcompo2,pcompo3,pcompo4,pcompo5], 
				          
				            backgroundColor: [
				                'rgba(99, 140, 254, 1)', 
				                'rgba(165, 28, 28, 1)',
				                'rgba(63, 81, 181, 1)',
				                'rgba(66, 66, 66, 1)'
				            ],
				            borderColor: [
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)'
				            ],
				            borderWidth: 2
				        }]
				    },
				    options: {
				    	title: {
				            display: true,
				            text: 'Composição Familiar'  //Titulo do gráfico
				        },
				    	layout: {
				    		padding: {
				    			left:0,
				    			right:0,
				    			top:10,
				    			bottom:0
				    		}
				    	},
				    	legend: {
				    		display: true,
				    		position: 'right',  //Alinhamento da legenda
				    		fullWidth: true,  //Alinhamento da legenda
				    		labels : {
				    			fontColor: '#000' //Cor da fonte da legenda
				    		}
				    	}
				    }
				});	
			},1000);
		};
	//--//

	//Condição Gráfico Mora com Quem? NÃO FINALIZADO//ddd
		function graf_mora_quem(pcom_pais,pcom_fam_espo,pcom_espo,pcom_amigos,poutros){

			//Espera 1 segundo para imprimir o gráfico na tela//
			setTimeout(function(id){

				var ctx = document.getElementById('graf_mora_quem').getContext('2d');

				Chart.defaults.global.defaultFontSize = 16;
				
				var myChart = new Chart(ctx, {
				    type: 'pie',
				    data: {
				        labels: ['Pais e Parentes','Familia Esposo(a)','Com o Esposo(a)', 'Com os Amigos','Outros'],
				        datasets: [
				        //Todas as situações - Casa Propria//
				        {
				        	label:['# of Votes'],
				            data: [pcom_pais,pcom_fam_espo,pcom_espo,pcom_amigos,poutros], 
				          
				            backgroundColor: [
				                'rgba(26, 35, 126, 1)', 
				                'rgba(78, 0, 3, 1)',
				                'rgba(66, 66, 66, 1)',
				                'rgba(99, 140, 254, 1)',
				                'rgba(239, 154, 159, 1)'
				            ],
				            borderColor: [
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)'
				            ],
				            borderWidth: 2
				        }]
				    },
				    options: {
				    	title: {
				            display: true,
				            text: 'Mora com Quem'  //Titulo do gráfico
				        },
				    	layout: {
				    		padding: {
				    			left:0,
				    			right:0,
				    			top:10,
				    			bottom:0
				    		}
				    	},
				    	legend: {
				    		display: true,
				    		position: 'right',  //Alinhamento da legenda
				    		fullWidth: true,  //Alinhamento da legenda
				    		labels : {
				    			fontColor: '#000' //Cor da fonte da legenda
				    		}
				    	}
				    }
				});	
			},1000);
		};
	//--//

	//Condição Gráfico Renda Famliar//
		function graf_renda_familiar(psal1,pentre1e2,pentre2e3,pentre3e4,pentre4e5,pmaisde5){

			//Espera 1 segundo para imprimir o gráfico na tela//
			setTimeout(function(id){

				var ctx = document.getElementById('graf_renda_familiar').getContext('2d');

				Chart.defaults.global.defaultFontSize = 16;
				
				var myChart = new Chart(ctx, {
				    type: 'pie',
				    data: {
				        labels: ['1 Salário','Entre 1 e 2 salarios','Entre 2 e 3 salarios','Entre 3 e 4 salarios','Entre 4 e 5 salarios','Mais de 5 salarios'],
				        datasets: [
				        //Todas as situações - Casa Propria//
				        {
				        	label:['# of Votes'],
				            data: [psal1,pentre1e2,pentre2e3,pentre3e4,pentre4e5,pmaisde5], 
				          
				            backgroundColor: [
				                'rgba(189, 189, 189, 1)', 
				                'rgba(239, 154, 159, 1)',
				                'rgba(99, 140, 254, 1)',
				                'rgba(97, 97, 97, 1)',
				                'rgba(165, 28, 28, 1)',
				                'rgba(63, 81, 181, 1)'
				            ],
				            borderColor: [
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)'
				            ],
				            borderWidth: 2
				        }]
				    },
				    options: {
				    	title: {
				            display: true,
				            text: 'Renda Familiar'  //Titulo do gráfico
				        },
				    	layout: {
				    		padding: {
				    			left:0,
				    			right:0,
				    			top:10,
				    			bottom:0
				    		}
				    	},
				    	legend: {
				    		display: true,
				    		position: 'right',  //Alinhamento da legenda
				    		fullWidth: true,  //Alinhamento da legenda
				    		labels : {
				    			fontColor: '#000' //Cor da fonte da legenda
				    		}
				    	}
				    }
				});	
			},1000);
		};
	//--//

	//Condição Gráfico Trabalho individual//
		function graf_trabalho_individual(ptclt_formal,ptclt_remoto,ptestagio,ptautonomo,ptempreemdedor,pclt_formal,pclt_remoto,pestagio,pautonomo,pempreemdedor){

			//Espera 1 segundo para imprimir o gráfico na tela//
			setTimeout(function(id){

				var ctx = document.getElementById('graf_trabalho_individual').getContext('2d');

				Chart.defaults.global.defaultFontSize = 15;
				
				var myChart = new Chart(ctx, {
				    type: 'bar',
				    data: {
				        labels: ['Matutino','Vespertino','Noturno', 'Integral','Por Turnos','Produção'],
				        datasets: [
				        //Todos os tempos de CLT Formal//
				        {
				        	label:['CLT Formal'],
				            data: [ptclt_formal[0],ptclt_formal[1],ptclt_formal[2],ptclt_formal[3],ptclt_formal[4],ptclt_formal[5]], 
				          
				            backgroundColor: [
				                'rgba(97, 97, 97, 1)', 
				                'rgba(97, 97, 97, 1)',
				                'rgba(97, 97, 97, 1)',
				                'rgba(97, 97, 97, 1)',
				                'rgba(97, 97, 97, 1)',
				                'rgba(97, 97, 97, 1)'

				            ],
				            borderColor: [
				                'rgba(97, 97, 97, 1)',
				                'rgba(97, 97, 97, 1)',
				                'rgba(97, 97, 97, 1)',
				                'rgba(97, 97, 97, 1)',
				                'rgba(97, 97, 97, 1)',
				                'rgba(97, 97, 97, 1)'
				            ],
				            borderWidth: 1
				        },
				        //Todos os tempos de CLT Remota//
				        {
				        	label:['CLT Remoto'],
				            data: [ptclt_remoto[0],ptclt_remoto[1],ptclt_remoto[2],ptclt_remoto[3],ptclt_remoto[4],ptclt_remoto[5]],
				            
				            backgroundColor: [
				                'rgba(165, 28, 28, 1)',  
				                'rgba(165, 28, 28, 1)',
				                'rgba(165, 28, 28, 1)',
				                'rgba(165, 28, 28, 1)',
				                'rgba(165, 28, 28, 1)',
				                'rgba(165, 28, 28, 1)'
				            ],
				            borderColor: [
             			  		'rgba(165, 28, 28, 1)',  
				                'rgba(165, 28, 28, 1)',
				                'rgba(165, 28, 28, 1)',
				                'rgba(165, 28, 28, 1)',
				                'rgba(165, 28, 28, 1)',
				                'rgba(165, 28, 28, 1)'
				            ],
				            borderWidth: 1
				        },
				        //Todos os tempos de Estágio//
				        {
				        	label:['Estágio'],
				            data: [ptestagio[0],ptestagio[1],ptestagio[2],ptestagio[3],ptestagio[4],ptestagio[5]],  
				           
				            backgroundColor: [
				                'rgba(63, 81, 181, 1)',
				                'rgba(63, 81, 181, 1)',
				                'rgba(63, 81, 181, 1)',
				                'rgba(63, 81, 181, 1)',
				                'rgba(63, 81, 181, 1)',
				                'rgba(63, 81, 181, 1)'
				            ],
				            borderColor: [
				                'rgba(63, 81, 181, 1)',
				                'rgba(63, 81, 181, 1)',
				                'rgba(63, 81, 181, 1)',
				                'rgba(63, 81, 181, 1)',
				                'rgba(63, 81, 181, 1)',
				                'rgba(63, 81, 181, 1)'
				            ],
				            borderWidth: 1
				        },
				        //Todos os tempos de Autonomo//
				        {
				        	label:['Autônomo'],
				            data: [ptautonomo[0],ptautonomo[1],ptautonomo[2],ptautonomo[3],ptautonomo[4],ptautonomo[5]],  //Faixas da Pizza
				            
				            backgroundColor: [
				                'rgba(239, 154, 159, 1)',
				                'rgba(239, 154, 159, 1)',
				                'rgba(239, 154, 159, 1)',
				                'rgba(239, 154, 159, 1)',
				                'rgba(239, 154, 159, 1)',
				                'rgba(239, 154, 159, 1)'
				            ],
				            borderColor: [
				                'rgba(239, 154, 159, 1)',
				                'rgba(239, 154, 159, 1)',
				                'rgba(239, 154, 159, 1)',
				                'rgba(239, 154, 159, 1)',
				                'rgba(239, 154, 159, 1)',
				                'rgba(239, 154, 159, 1)'
				            ],
				            borderWidth: 1
				        },
				        //Todos os tempos de Empreemdedor//
				        {
				        	label:['Empreemdedor'],
				            data: [ptempreemdedor[0],ptempreemdedor[1],ptempreemdedor[2],ptempreemdedor[3],ptempreemdedor[4],ptempreemdedor[5]],  //Faixas da Pizza
				            
				            backgroundColor: [
				                'rgba(66, 66, 66, 1)',
				                'rgba(66, 66, 66, 1)',
				                'rgba(66, 66, 66, 1)',
				                'rgba(66, 66, 66, 1)',
				                'rgba(66, 66, 66, 1)',
				                'rgba(66, 66, 66, 1)'
				            ],
				            borderColor: [
				                'rgba(66, 66, 66, 1)',
				                'rgba(66, 66, 66, 1)',
				                'rgba(66, 66, 66, 1)',
				                'rgba(66, 66, 66, 1)',
				                'rgba(66, 66, 66, 1)',
				                'rgba(66, 66, 66, 1)'
				            ],
				            borderWidth: 1
				        }]
				    },
				    options: {
				    	title: {
				            display: true,
				            text: 'Situação de Trabalho'  //Titulo do gráfico
				        },
				    	layout: {
				    		padding: {
				    			left:0,
				    			right:0,
				    			top:10,
				    			bottom:0
				    		}
				    	},
				    	legend: {
				    		display: true,
				    		position: 'right',  //Alinhamento da legenda
				    		fullWidth: true,  //Alinhamento da legenda
				    		labels : {
				    			fontColor: '#000', //Cor da fonte da legenda
				    			fontSize:16
				    		},
				    		label: {
				    			display:false
				    		}
				    	},
				    	scales: {
				    		yAxes: [{
				    			display:true,
				    		}],
				    		xAxes: [{
				    			barPercentage: 1
				    		}]
				    	}
				    }
				});	
			},1000);
		};
	//--//	

	
	//Condição Gráfico Ensino Anterior à FATEC.//
		function graf_vida_escolar(ptncurso,pttecnico,ptgrad_bach,ptgrad_licen,pttecnol,pncurso,ptecnico,pgrad_bach,pgrad_licen,ptecnol){

			//Espera 1 segundo para imprimir o gráfico na tela//
			setTimeout(function(id){

				var ctx = document.getElementById('graf_vida_escolar').getContext('2d');

				Chart.defaults.global.defaultFontSize = 14;
				
				var myChart = new Chart(ctx, {
				    type: 'bar',
				    data: {
				        labels: ['Particular','Pública', 'Maior parte: pública', 'Maior parte: particular'],
				        datasets: [
				        //Todas as situações - Não fez nenhum curso anterior//
				        {
				        	label:['Nenhum Curso'],
				            data:[ptncurso[0],ptncurso[1],ptncurso[2],ptncurso[3]], 
				          
				            backgroundColor: [
				                'rgba(66, 66, 66, 1)', 
				                'rgba(66, 66, 66, 1)',
				                'rgba(66, 66, 66, 1)',
				                'rgba(66, 66, 66, 1)'				                
				            ],
				            borderColor: [
				                'rgba(66, 66, 66, 1)',
				                'rgba(66, 66, 66, 1)',
				                'rgba(66, 66, 66, 1)',
				                'rgba(66, 66, 66, 1)'
				            ],
				            borderWidth: 1
				        },
				        //Todas as Situações  - Fez curso técnico//
				        {
				        	label:['Curso Técnico'],
				            data: [pttecnico[0],pttecnico[1],pttecnico[2],pttecnico[3]],
				            
				            backgroundColor: [
				                'rgba(99, 140, 254, 1)',  
				                'rgba(99, 140, 254, 1)',
				                'rgba(99, 140, 254, 1)',
				                'rgba(99, 140, 254, 1)'
				            ],
				            borderColor: [
				                'rgba(99, 140, 254, 1)',
				                'rgba(99, 140, 254, 1)',
				                'rgba(99, 140, 254, 1)',
				                'rgba(99, 140, 254, 1)'
				            ],
				            borderWidth: 1
				        },
				        //Todas as Situações - Fez graduação do tipo bacharelado//
				        {
				        	label:['Bacharelado'],
				            data: [ptgrad_bach[0],ptgrad_bach[1],ptgrad_bach[2],ptgrad_bach[3]],  
				           
				            backgroundColor: [
				                'rgba(239, 154, 159, 1)',
				                'rgba(239, 154, 159, 1)',
				                'rgba(239, 154, 159, 1)',
				                'rgba(239, 154, 159, 1)'
				            ],
				            borderColor: [
				                'rgba(239, 154, 159, 1)',
				                'rgba(239, 154, 159, 1)',
				                'rgba(239, 154, 159, 1)',
				                'rgba(239, 154, 159, 1)'
				            ],
				            borderWidth: 1
				        },
				        //Todas as situações - Fez graduação do tipo licenciatura//
				        {
				        	label:['Licenciatura'],
				            data: [ptgrad_licen[0],ptgrad_licen[1],ptgrad_licen[2],ptgrad_licen[3]], 
				            
				            backgroundColor: [
				                'rgba(97, 97, 97, 1)',
				                'rgba(97, 97, 97, 1)',
				                'rgba(97, 97, 97, 1)',
				                'rgba(97, 97, 97, 1)'
				            ],
				            borderColor: [
				                'rgba(97, 97, 97, 1)',
				                'rgba(97, 97, 97, 1)',
				                'rgba(97, 97, 97, 1)',
				                'rgba(97, 97, 97, 1)'
				            ],
				            borderWidth: 1
				        },
				       	//Todas as situações - Fez graduação em tecnologia//
				    	{
				    		label:['Tecnólogo'],
				    		data: [pttecnol[0],pttecnol[1],pttecnol[2],pttecnol[3]],

				    		backgroundColor: [
				                'rgba(63, 81, 181, 1)',
				                'rgba(63, 81, 181, 1)',
				                'rgba(63, 81, 181, 1)',
				                'rgba(63, 81, 181, 1)'
				                
				            ],
				            borderColor: [
				                'rgba(63, 81, 181, 1)',
				                'rgba(63, 81, 181, 1)',
				                'rgba(63, 81, 181, 1)',
				                'rgba(63, 81, 181, 1)'
				            ],
				            borderWidth: 1				            
				    	}]
					},

					options: {
				    	title: {
				            display: true,
				            text: 'Vida Acadêmica Pretérita'  //Titulo do gráfico
				        },
				    	layout: {
				    		padding: {
				    			left:0,
				    			right:0,
				    			top:10,
				    			bottom:0
				    		}
				    	},
				    	legend: {
				    		display: true,
				    		position: 'right',  //Alinhamento da legenda
				    		fullWidth: true,  //Alinhamento da legenda
				    		labels : {
				    			fontColor: '#000', //Cor da fonte da legenda
				    			fontSize:12
				    		},
				    		label: {
				    			display:false
				    		}
				    	},
				    	scales: {
				    		yAxes: [{
				    			display:true,
				    		}]
				    	}
				    }
				});	
			},1000);
		};
	//--//

	//Condição Gráfico Habilidade com T.I. //
		function graf_conhece_informat(pnenhum,pbasico,pintermed,pavancado){

			//Espera 1 segundo para imprimir o gráfico na tela//
			setTimeout(function(id){

				var ctx = document.getElementById('graf_conhece_informat').getContext('2d');

				Chart.defaults.global.defaultFontSize = 16;
				
				var myChart = new Chart(ctx, {
				    type: 'pie',
				    data: {
				        labels: ['Nenhum', 'Básico', 'Intermediário', 'Avançado'],
				        datasets: [{
				            label: '# of Votes',
				            data: [pnenhum, pbasico, pintermed, pavancado],  //Faixas da Pizza
				            
				            backgroundColor: [
				                'rgba(97, 97, 97, 1)', //Cores de fundo da Pizza (cuidado com as virgulas)
				                'rgba(99, 140, 254, 1)',
				                ' rgba(78, 0, 3, 1)'
				            ],
				            borderColor: [
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)'
				            ],
				            borderWidth: 2
				        }]
				    },
				    options: {
				    	title: {
				            display: true,
				            text: 'Nível de Conhecimento em Informática'  //Titulo do gráfico
				        },
				    	layout: {
				    		padding: {
				    			left:0,
				    			right:0,
				    			top:10,
				    			bottom:0
				    		}
				    	},
				    	legend: {
				    		display: true,
				    		position: 'right',  //Alinhamento da legenda
				    		fullWidth: true,  //Alinhamento da legenda
				    		labels : {
				    			fontColor: '#000' //Cor da fonte da legenda
				    		}
				    	}
				    }
				});	
			},1000);
		};
	//--//
	
	//Condição Gráfico Deficiência//
		function graf_deficiencia(pndef,pvisual,paudi,pfisi,pintelec){

			//Espera 1 segundo para imprimir o gráfico na tela//
			setTimeout(function(id){

				var ctx = document.getElementById('graf_deficiencia').getContext('2d');

				Chart.defaults.global.defaultFontSize = 16;
				
				var myChart = new Chart(ctx, {
				    type: 'pie',
				    data: {
				        labels: ['Não possui', 'Def. Visual', 'Def. Auditiva', 'Def. Física', 'Def. Intelectual'],
				        datasets: [{
				            label: '# of Votes',
				            data: [pndef,pvisual,paudi,pfisi,pintelec],  //Faixas da Pizza
				            //Se você for adicionar uma faixa nova na pizza, deve ser addicionada uma cor nova, indice novo e uma border nova//
				            backgroundColor: [
				                'rgba(97, 97, 97, 1)', //Cores de fundo da Pizza (cuidado com as virgulas)
				                'rgba(165, 28, 28, 1)',
				                'rgba(63, 81, 181, 1)',
				                'rgba(189, 189, 189, 1)',
				                'rgba(189, 189, 189, 1)'
				            ],
				            borderColor: [
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)'
				            ],
				            borderWidth: 2
				        }]
				    },
				    options: {
				    	title: {
				            display: true,
				            text: 'Percentual de alunos com alguma deficiência'  //Titulo do gráfico
				        },
				    	layout: {
				    		padding: {
				    			left:0,
				    			right:0,
				    			top:10,
				    			bottom:0
				    		}
				    	},
				    	legend: {
				    		display: true,
				    		position: 'right',  //Alinhamento da legenda
				    		fullWidth: true,  //Alinhamento da legenda
				    		labels : {
				    			fontColor: '#000' //Cor da fonte da legenda
				    		}
				    	}
				    }
				});	
			},1000);
		};
	//--//


	//Condição Gráfico Acesso aos serviços de saúde//
		function graf_saude(puni_sus,puni_part,pconv_trab,pconv_part,p_sus_part){

			//Espera 1 segundo para imprimir o gráfico na tela//
			setTimeout(function(id){

				var ctx = document.getElementById('graf_saude').getContext('2d');

				Chart.defaults.global.defaultFontSize = 16;
				
				var myChart = new Chart(ctx, {
				    type: 'pie',
				    data: {
				        labels: ['Somente SUS', 'Somente Particular', 'Convênio (trabalho)', 'Convênio (particular)', 'SUS e particular'],
				        datasets: [{
				            label: '# of Votes',
				            data: [puni_sus,puni_part,pconv_trab,pconv_part,p_sus_part],  //Faixas da Pizza
				            //Se você for adicionar uma faixa nova na pizza, deve ser addicionada uma cor nova, indice novo e uma border nova//
				            backgroundColor: [
				                'rgba(26, 35, 126, 1)', //Cores de fundo da Pizza (cuidado com as virgulas)
				                'rgba(78, 0, 3, 1)',
				                'rgba(66, 66, 66, 1)',
				                'rgba(99, 140, 254, 1)',
				                'rgba(239, 154, 159, 1)'
				            ],
				            borderColor: [
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)'
				            ],
				            borderWidth: 2
				        }]
				    },
				    options: {
				    	title: {
				            display: true,
				            text: 'Perfil do Acesso à Saúde'  //Titulo do gráfico
				        },
				    	layout: {
				    		padding: {
				    			left:0,
				    			right:0,
				    			top:10,
				    			bottom:0
				    		}
				    	},
				    	legend: {
				    		display: true,
				    		position: 'right',  //Alinhamento da legenda
				    		fullWidth: true,  //Alinhamento da legenda
				    		labels : {
				    			fontColor: '#000' //Cor da fonte da legenda
				    		}
				    	}
				    }
				});	
			},1000);
		};
	//--//


	//Condição Gráfico Por que escolheu a FATEC?//
		function graf_razaofatec(pdipl,pdesemp_recal,ptrab_area,pinter_area,pmuda_area,poutro_mot){

			//Espera 1 segundo para imprimir o gráfico na tela//
			setTimeout(function(id){

				var ctx = document.getElementById('graf_razaofatec').getContext('2d');

				Chart.defaults.global.defaultFontSize = 16;
				
				var myChart = new Chart(ctx, {
				    type: 'pie',
				    data: {
				        labels: ['Diploma, para melhorar salário', 'Desemprego e requalificação', 'Trabalhar na área', 'Interessar-se', 'Mudança de área', 'Outro motivo'],
				        datasets: [	        
				        {
				        	label:'# of Votes',
				            data: [pdipl,pdesemp_recal,ptrab_area,pinter_area,pmuda_area,poutro_mot], 
				          
				            backgroundColor: [
				                'rgba(97, 97, 97, 1)', 
				                'rgba(165, 28, 28, 1)',
				                'rgba(63, 81, 181, 1)',
				                'rgba(189, 189, 189, 1)',
				                'rgba(239, 154, 159, 1)',
				                'rgba(99, 140, 254, 1)'
				            ],
				            borderColor: [
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)',
				                'rgba(255, 255, 255, 1)'
				            ],
				            borderWidth: 2
				        }]
				    },
				    options: {
				    	title: {
				            display: true,
				            text: 'Razões pessoais para prestar o vestibular na Fatec'  //Titulo do gráfico
				        },
				    	layout: {
				    		padding: {
				    			left:0,
				    			right:0,
				    			top:10,
				    			bottom:0
				    		}
				    	},
				    	legend: {
				    		display: true,
				    		position: 'right',  //Alinhamento da legenda
				    		fullWidth: true,  //Alinhamento da legenda
				    		labels : {
				    			fontColor: '#000', //Cor da fonte da legenda
				    			fontSize:16
				    		},
				    		label: {
				    			display:false
				    		}
				    	},
				    	
				    }
				});	
			},1000);
		};
	//--//
//-FIM DAS FUNÇÕES QUE GERAM OS GRAFICOS-//






//Depois que o documento for inteiro carregado, faça !//
$(document).ready(function(){

	//Ativando classes materialize//
		$('ul.tabs').tabs({
			swipeable:false
		});

		$('.collapsible').collapsible();

		$('.sidenav').sidenav();
	//--//

	//Carrega a pagina inicial
		setTimeout(function(){
			$('.h_inicio').fadeIn('slow');
		},500);
	//--//

	//Se o logo for clicado//
		$('#loggo').on('click',function(){
			window.document.location.href = '../PSE/';	
		});
	//--//

	//função que verifica as divs que devem estar em block ou none//
		
		//Quando clicar no botao inicio, faça.
		$('#bt_inicio').on('click',function(e){
			
			//Chama a função ver_tab, criada no começo do elemento//
			ver_tab('bt_inicio');
		});

		//Quando clicar no botao quem somos,faça.
		$('#bt_quem_somos').on('click',function(){

			//Chama a função ver_tab, criada no começo do elemento//
			ver_tab('bt_quem_somos');
		});
		
		//Quando clicar no botao graficos, faça.
		$('#bt_graficos').on('click',function(){
			
			//Chama a função ver_tab, criada no começo do elemento//
			ver_tab('bt_graficos');
		});

		//Quando clicar no botao detalhes, faça.
		$('#bt_detalhes').on('click',function(){

			//Chama a função ver_tab, criada no começo do elemento//
			ver_tab('bt_detalhes');
		});	
	//--//


	

	//Daqui pra baixo, eu pego a planilha e transformo ela em JSON//
		//Indicando onde esta o arquivo//
		var url = "_base/bdFINAL.xlsx";
		//Instanciando o objeto que vai transferior o arquivo//
		var Req = new XMLHttpRequest();
		//Indicando para o metodo open, o metodo, e qual arquivo sera aberto//
		Req.open("GET",url,true);
		//Indicando que a propriedade responseType sera do tipo arraybuffer//
		Req.responseType = "arraybuffer";

		//Preparando o metodo onload para carregar o arquivo//
		Req.onload = function(e){

			//Construindo a função que irá ler o arquivo e converte-lo em JSON//	
			function leia_arquivo(){

				//Pegue o arraybuffer e guarde na variavel arraybuffer//
				var arraybuffer = Req.response;

				//crie uma instancia da classe Uint8Array
				var data = new Uint8Array(arraybuffer);
				var arr = new Array();
				for(var i=0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
				var bstr = arr.join("");
				var workbook = XLSX.read(bstr, {type:"binary"});
				var first_sheet_name = workbook.SheetNames[0];
				var worksheet = workbook.Sheets[first_sheet_name];
				var info = XLSX.utils.sheet_to_json(worksheet,{raw:false});
				return info;	
			}

			//Receba o objeto contendo tudo//
			var info = leia_arquivo();

			// console.log(info);


			// AREA DE PROGRAMAÇÃO DOS GRÁFICOS //

			//INICIO_BT_ETARIA Se o bt_etaria for clicado, chame a função_gráfico faixa_etaria//
			$('#bt_etaria').on('click',function(){

				//Recebe a data Atual//
				var now = new Date;

				now = now.getFullYear();
				
				//Variaveis contadoras//
				var ate_20 = 0, entre_21e30 = 0, entre_31e40 = 0 , acima_40 = 0; 3
				//Variaveis pra receber a porcentagem//
				var pate_20 =0, pentre_21e30 = 0, pentre_31e40 = 0, pacima_40 = 0;

				//Para cada linha faça//
				for(let i in info){

					//Pega o ano e converte em numero//
					var ano = parseInt(info[i].DATADENASCIMENTO.slice(6));
				
					//Condições//
					if((now-ano)<=20)
					{
						ate_20++;
					}
					//Entre 21 e 30//
					else if((now-ano)>=21 && (now-ano)<=30)
					{
						entre_21e30++;
					}	
					else if((now-ano)>=31 && (now-ano)<=40)
					{
						entre_31e40++;
					}
					else if((now-ano)>40)
					{
						acima_40++;
					};
					//FimCondições//
				};
				//fimFor//

				//Porcentagens dos resultados diante do total//
					//até 20 anos//
					pate_20 = (ate_20*100)/info.length;
					pate_20 = pate_20.toFixed(2);
					
					//entre 21 e 30 anos//
					pentre_21e30 = (entre_21e30*100)/info.length;
					pentre_21e30 = pentre_21e30.toFixed(2);

					//entre 31 e 40 anos//
					pentre_31e40 = (entre_31e40*100)/info.length;
					pentre_31e40 = pentre_31e40.toFixed(2);

					//acima de 40//
					pacima_40 = (acima_40*100)/info.length;
					pacima_40 = pacima_40.toFixed(2);

				//--//

				//Chamando a função e passando os valores para montar o gráfico//
				graf_etaria(pate_20,pentre_21e30,pentre_31e40,pacima_40);
				//--//
			});
			//-FIM_BT_ETARIA-//


			//INICIO_BT_CIVIL//
			$('#bt_civil').on('click',function(){

				//Variaveis contadoras
				var casado = '', solteiro = '', outros = '';
				// Variaveis de %
				var pcasado = 0, psolteiro = 0, poutros = 0; 
				
				//Para cada linha faça
				for(let i in info){
					
					//Condições//
					if(info[i].ESTADOCÍVIL2=='casado')
					{
						casado++;
					}
					else if(info[i].ESTADOCÍVIL2=='solteiro')
					{
						solteiro++;
					}
					else if(info[i].ESTADOCÍVIL2=='outros')
					{
						outros++;
					};
					//-FimCondições-//
				};
				//Fimfor//

				//Porcentagens dos resultados diante do total//
					//% casados//
					pcasado = (casado*100)/info.length;
					pcasado = pcasado.toFixed(2);
					
					//% solteiros//
					psolteiro = (solteiro*100)/info.length;
					psolteiro = psolteiro.toFixed(2);
					//% outros//
					poutros = (outros*100)/info.length;
					poutros = poutros.toFixed(2);
				//--//


				//Chama a função e passa os valores//
				graf_civil(pcasado,psolteiro,poutros);
				//--//
			});
			//-FIM_BT_CIVIL//


			//INICIO_BT_FILHOS//
			$('#bt_filhos').on('click',function(){

				//Variaveis conatdoras//
				var filho1 = 0, filho2 = 0, filho3 = 0, filho4 = 0, filho5 = 0, nfilho = 0;

				//Porcentagens de filhos//
				var pfilho1 = 0, pfilho2 = 0, pfilho3 = 0, pfilho4 = 0, pfilho5 = 0, pnfilho = 0;


				//Percorrendo os dados//
				for(let i in info){

					//Se tem filhos
					if(info[i].TEMFILHOS=='Sim'){
						
						//Se tem 1 filho
						if(info[i].QUANTOS==1)
						{
							filho1++;
						}
						//Se tem 2 filhos.
						else if(info[i].QUANTOS==2)
						{
							filho2++;
						}
						//Se tem 3 filhos.
						else if(info[i].QUANTOS==3)
						{
							filho3++;
						}
						//Se tem 4 filhos.
						else if(info[i].QUANTOS==4)
						{
							filho4++;
						}
						else if(info[i].QUANTOS==5)
						{
							filho5++;
						};
					}
					//Se não tem filhos//
					else if(info[i].TEMFILHOS=='Não')
					{
						//conta quantos não tem filhos//
						nfilho++;
					};
					//FimCondição//
				};
				//FimFor//


				//Porcentagens dos resultados sobre o total//
					//% de quem tem 1 filho
					pfilho1 = (filho1*100)/info.length;
					pfilho1 = pfilho1.toFixed(2);

					//% de quem tem 2 filhos.
					pfilho2 = (filho2*100)/info.length;
					pfilho2 = pfilho2.toFixed(2);

					//% de quem tem 3 filhos.
					pfilho3 = (filho3*100)/info.length;
					pfilho3 = pfilho3.toFixed(2);

					//% de quem tem 4 filhos.
					pfilho4 = (filho4*100)/info.length;
					pfilho4 = pfilho4.toFixed(2);

					//% de quem tem 5 filhos ou mais.
					pfilho5 = (filho5*100)/info.length;
					pfilho5 = pfilho5.toFixed(2);

					//% de quem não tem filhos
					pnfilho = (nfilho*100)/info.length;
					pnfilho = pnfilho.toFixed(2);
				//--//

				//Chama a função e monta o gráfico//
				graf_filhos(pfilho1,pfilho2,pfilho3,pfilho4,pfilho5,pnfilho);
				//-//
			});
			//FIM_BT_FILHOS//


			//INICIO_BT_RESIDE_EM_FRANCA//
			$('#bt_reside_franca').on('click',function(){

				//Variaveis contadoras
				var mora_franca=0, nmora_franca=0;
				
				//Variaveis de porcentagem
				var pmora_franca=0, pnmora_franca=0;

				//Percorrendo os dados//
				for(var i in info){

					//Se for de franca
					if( info[i].CIDADESP=='Franca')
					{
						mora_franca++;
					}
					//Mora fora de franca
					else if(info[i].CIDADESP!='Franca')
					{
						nmora_franca++;
					};
					//FimCondicao//
				};
				//FimFor//

				//Porcentagens dos resultados//
					pmora_franca = (mora_franca*100)/info.length;
					pmora_franca = pmora_franca.toFixed(2);
					
					pnmora_franca = (nmora_franca*100)/info.length;
					pnmora_franca = pnmora_franca.toFixed(2);
				//--//

				//Chama a função de cria o gráfico//
					graf_reside(pmora_franca,pnmora_franca);
				//--//		
			});
			//-FIM_BT_RESIDE_EM_FRANCA-//

			//INICIO_BT_LOCOMOCAO//
			$('#bt_locomocao').on('click',function(){

				//Variaveis contadoras
				var onibus = 0, van = 0, carro = 0, moto = 0, bicicleta = 0, a_pe = 0;

				//Variaveis de porcentagem
				var ponibus = 0, pvan = 0, pcarro = 0, pmoto = 0, pbicicleta = 0, pa_pe = 0;

				//Percorrendo os valores//
				for(let i in info){

					
					//Condição//	
					if(info[i].QUETRANSPORTEUSAPARAIRPARAAFACULDADE2=='ônibus')
					{
						onibus++;
					}
					else if(info[i].QUETRANSPORTEUSAPARAIRPARAAFACULDADE2=='van')
					{
						van++;
					}
					else if(info[i].QUETRANSPORTEUSAPARAIRPARAAFACULDADE2=='carro')
					{
						carro++;
					}
					else if(info[i].QUETRANSPORTEUSAPARAIRPARAAFACULDADE2=='moto')
					{
						moto++;
					}
					else if(info[i].QUETRANSPORTEUSAPARAIRPARAAFACULDADE2=='bicicleta')
					{
						bicicleta++;
					}
					else if(info[i].QUETRANSPORTEUSAPARAIRPARAAFACULDADE2=='a pé')
					{
						a_pe++;
					};
					//FimCondicao//
				};
				//FimFor//


				//Porcentagens sobre os resultados//
					//% de quem vai de onibus
					ponibus = (onibus*100)/info.length;
					ponibus = ponibus.toFixed(2);
					
					//% de quem vai de van
					pvan = (van*100)/info.length;
					pvan = pvan.toFixed(2);

					//% de quem vai de carro
					pcarro = (carro*100)/info.length;
					pcarro = pcarro.toFixed(2);

					//% de quem vai de moto
					pmoto = (moto*100)/info.length;
					pmoto = pmoto.toFixed(2);

					//% de quem vai de bicicleta
					pbicicleta = (bicicleta*100)/info.length;
					pbicicleta = pbicicleta.toFixed(2);

					//% de quem vai a pé
					pa_pe = (a_pe*100)/info.length;
					pa_pe = pa_pe.toFixed(2);
				//--//

				//Chama a fun~ção e gera o gráfico//
				graf_locomocao(ponibus,pvan,pcarro,pmoto,pbicicleta,pa_pe);
				//--//
			});
			//-FIM_BT_LOCOMOCAO-//

			//INICIO_BT_DISTANCIA//
			$('#bt_distancia').on('click',function(){

				//Variaveis contadoras
				var ate1 = 0, entre1e3 = 0, entre3e5 = 0, entre5e10 = 0,  maisde10 = 0;

				//Variaveis de porcentagem
				var pate1 = 0, pentre1e3 = 0, pentre3e5 = 0, pentre5e10 = 0,  pmaisde10 = 0;

				//Percorrendo os valores//
				for(let i in info){

					//Condições
					if(info[i].QUALADISTÂNCIADOTRABALHOCASAATÉAFACULDADE2=='até 1 km')
					//Até 1 km
					{
						ate1++;
					}
					//Entre 1 e 3km
					else if(info[i].QUALADISTÂNCIADOTRABALHOCASAATÉAFACULDADE2=='entre 1 e 3 km')
					{
						entre1e3++;
					}
					else if(info[i].QUALADISTÂNCIADOTRABALHOCASAATÉAFACULDADE2=='entre 3 e 5 km')
					//Entre 3 e 5 km
					{	
						entre3e5++;
					}
					//Entre 5 e 10 km
					else if(info[i].QUALADISTÂNCIADOTRABALHOCASAATÉAFACULDADE2=='entre 5 e 10 km')
					{
						entre5e10++;
					}
					//Mais de 10 km
					else if(info[i].QUALADISTÂNCIADOTRABALHOCASAATÉAFACULDADE2=='mais de 10 km')
					{
						maisde10++;
					};
					//FimCondições
					
				};
				//FimFor//


				//Porcentagens sobre os resultados//
					
					//% de ate 1 km
					pate1 = (ate1*100)/info.length;
					pate1 = pate1.toFixed(2);

					//% de entre 1 e 3 km
					pentre1e3 = (entre1e3*100)/info.length;
					pentre1e3 = pentre1e3.toFixed(2);

					//% de entre 3 e 5 km
					pentre3e5 = (entre3e5*100)/info.length;
					pentre3e5 = entre3e5.toFixed(2);

					//% de entre 5 e 10 km
					pentre5e10 = (entre5e10*100)/info.length;
					pentre5e10 = pentre5e10.toFixed(2);

					//% de mais de 10 km
					pmaisde10 = (maisde10*100)/info.length;
					pmaisde10 = pmaisde10.toFixed(2);

				//--//

				//Chama a fun~ção e gera o gráfico//
				graf_distancia(pate1,pentre1e3,pentre3e5,pentre5e10,pmaisde10);
				//--//
			});
			//-FIM_BT_DISTANCIA-//

			//INICIO_BT_SITUACAO_RESIDENCIA//
			$('#bt_situacao_residencia').on('click',function(){

				//Variaveis contadoras
				var propria = 0, alugada = 0, financiada = 0, outro = 0;

				//Variaveis contadoras de tempo de moradia//
				/*
					Legenda:

					Será usado um array para cada opção, pra usar menos variáveis:

					ex: tpropria = [  0 , 1 , 2 , 3 ] - Repare as posições;

					Descrição de cada posição
						0 - Menos de 1 Ano.
						1 - De 1 a 5 Anos.
						2 - De 5 a 10 Anos.
						3 - Mais de 10 Anos.
					
					OBS: Teremos uma variavel tempo para cada situação.

					Então na hora de somar quantas pessoas tem em cada opção eu vou usar,
					array[posicao_referente]++;
					
					Ex: Se o fulano tem casa propria, eu chamo a variavel tpropria[], e verifico quanto tempo
					ele mora nessa casa, dependendo da resposta eu guardo na posição equivalente, conforme
					explicado na linha 822 desse código.

				*/
				var tpropria = [0,0,0,0], talugada = [0,0,0,0], tfinanciada = [0,0,0,0], toutro = [0,0,0,0];

				/*Variaveis de porcentagens de tempo de moradia, respeita as mesmas regras de posição, só que guarda a %
				  de cada tempo diante de cada resposta, por exemplo - Quantos % que tem casa propria a menos de 1 ano
				  diante de todos que responderam, e assim por diante respeitando todas as posições.*/
				var ptpropria = [0,0,0,0], ptalugada = [0,0,0,0], ptfinanciada = [0,0,0,0], ptoutro = [0,0,0,0];
				  
				//Variaveis de porcentagem
				var ppropria = 0, palugada = 0, pfinanciada = 0, poutro = 0;
				
				//Percorrendo os valores//
				for(let i in info){

					//Condições (Verifica a situação da casa)
					
					switch(info[i].SUARESIDÊNCIAÉ){
						
						//Se for casa Proria//
						case 'Própria':
							//Verifique o tempo de moradia//
							if(info[i].MORANELAAQUANTOTEMPO=='menos de 1 ano')
							//mora menos de 1 ano	
							{
								tpropria[0]++;
							}
							else if(info[i].MORANELAAQUANTOTEMPO=='de 1 a 5 anos')
							//mora entre 1 e 5 anos
							{
								tpropria[1]++;
							}
							else if(info[i].MORANELAAQUANTOTEMPO=='de 5 a 10 anos')
							//mora entre 5 e 10 anos
							{
								tpropria[2]++;
							}
							else if(info[i].MORANELAAQUANTOTEMPO=='mais de 10 anos')
							//mora mais de 10 anos
							{
								tpropria[3]++;
							};
						break;

						//Se for casa alugada//
						case 'Alugada':
							//Verifique o tempo de moradia//
							if(info[i].MORANELAAQUANTOTEMPO=='menos de 1 ano')
							//mora menos de 1 ano	
							{
								talugada[0]++;
							}
							else if(info[i].MORANELAAQUANTOTEMPO=='de 1 a 5 anos')
							//mora entr 1 e 5 anos
							{
								talugada[1]++;
							}
							else if(info[i].MORANELAAQUANTOTEMPO=='de 5 a 10 anos')
							//mora entre 5 e 10 anos
							{
								talugada[2]++;
							}
							else if(info[i].MORANELAAQUANTOTEMPO=='mais de 10 anos')
							//mora mais de 10 anos
							{
								talugada[3]++;
							};
						break;

						//Se for casa Financiada//
						case 'Financiada':
							//Verifique o tempo de moradia//
							if(info[i].MORANELAAQUANTOTEMPO=='menos de 1 ano')
							//mora menos de 1 ano	
							{
								tfinanciada[0]++;
							}
							else if(info[i].MORANELAAQUANTOTEMPO=='de 1 a 5 anos')
							//mora entr 1 e 5 anos
							{
								tfinanciada[1]++;
							}
							else if(info[i].MORANELAAQUANTOTEMPO=='de 5 a 10 anos')
							//mora entre 5 e 10 anos
							{
								tfinanciada[2]++;
							}
							else if(info[i].MORANELAAQUANTOTEMPO=='mais de 10 anos')
							//mora mais de 10 anos
							{
								tfinanciada[3]++;
							};
						break;

						//Se for Outro//
						case 'Outro':
							//Verifique o tempo de moradia//
							if(info[i].MORANELAAQUANTOTEMPO=='menos de 1 ano')
							//mora menos de 1 ano	
							{
								toutro[0]++;
							}
							else if(info[i].MORANELAAQUANTOTEMPO=='de 1 a 5 anos')
							//mora entr 1 e 5 anos
							{
								toutro[1]++;
							}
							else if(info[i].MORANELAAQUANTOTEMPO=='de 5 a 10 anos')
							//mora entre 5 e 10 anos
							{
								toutro[2]++;
							}
							else if(info[i].MORANELAAQUANTOTEMPO=='mais de 10 anos')
							//mora mais de 10 anos
							{
								toutro[3]++;
							};
						break;
					};
					//FimCondição//	
				};
				//FimFor//


				//Porcentagens sobre os resultados//

					//ApuracaoCasaPropria//
						//% de quem tem casa propria
						ppropria = (propria*100)/info.length;
						ppropria = ppropria.toFixed(2);

						//% de quem tem casa propria, em cada situação de tempo//
							//Menos de 1 Ano
							ptpropria[0] = (tpropria[0]*100)/info.length;
							ptpropria[0] = ptpropria[0].toFixed(2);

							//De 1 a 5 anos
							ptpropria[1] = (tpropria[1]*100)/info.length;
							ptpropria[1] = ptpropria[1].toFixed(2);

							//De 5 a 10 anos
							ptpropria[2] = (tpropria[2]*100)/info.length;
							ptpropria[2] = ptpropria[2].toFixed(2);

							//Mais de 10 anos
							ptpropria[3] = (tpropria[3]*100)/info.length;
							ptpropria[3] = ptpropria[3].toFixed(2);
						//--//
					//FimApuracaoCasaPropria//

					//ApuracaoCasaAlugada//
						//% de quem tem casa alugada
						palugada = (alugada*100)/info.length;
						palugada = palugada.toFixed(2);

						//% de quem tem casa alugada, em cada situação de tempo//
							//Menos de 1 Ano
							ptalugada[0] = (talugada[0]*100)/info.length;
							ptalugada[0] = ptalugada[0].toFixed(2);

							//De 1 a 5 anos
							ptalugada[1] = (talugada[1]*100)/info.length;
							ptalugada[1] = ptalugada[1].toFixed(2);

							//De 5 a 10 anos
							ptalugada[2] = (talugada[2]*100)/info.length;
							ptalugada[2] = ptalugada[2].toFixed(2);

							//Mais de 10 anos
							ptalugada[3] = (talugada[3]*100)/info.length;
							ptalugada[3] = ptalugada[3].toFixed(2);
						//--//
					//FimApuracaoCasaalugada//

					//ApuracaoCasafinanciada//
						//% de quem tem casa financiada
						pfinanciada = (financiada*100)/info.length;
						pfinanciada = pfinanciada.toFixed(2);

						//% de quem tem casa financiada, em cada situação de tempo//
							//Menos de 1 Ano
							ptfinanciada[0] = (tfinanciada[0]*100)/info.length;
							ptfinanciada[0] = ptfinanciada[0].toFixed(2);

							//De 1 a 5 anos
							ptfinanciada[1] = (tfinanciada[1]*100)/info.length;
							ptfinanciada[1] = ptfinanciada[1].toFixed(2);

							//De 5 a 10 anos
							ptfinanciada[2] = (tfinanciada[2]*100)/info.length;
							ptfinanciada[2] = ptfinanciada[2].toFixed(2);

							//Mais de 10 anos
							ptfinanciada[3] = (tfinanciada[3]*100)/info.length;
							ptfinanciada[3] = ptfinanciada[3].toFixed(2);
						//--//
					//FimApuracaoCasafinanciada//

					//ApuracaoCasaoutro//
						//% de quem tem casa outro
						poutro = (outro*100)/info.length;
						poutro = poutro.toFixed(2);

						//% de quem tem casa outro, em cada situação de tempo//
							//Menos de 1 Ano
							ptoutro[0] = (toutro[0]*100)/info.length;
							ptoutro[0] = ptoutro[0].toFixed(2);

							//De 1 a 5 anos
							ptoutro[1] = (toutro[1]*100)/info.length;
							ptoutro[1] = ptoutro[1].toFixed(2);

							//De 5 a 10 anos
							ptoutro[2] = (toutro[2]*100)/info.length;
							ptoutro[2] = ptoutro[2].toFixed(2);

							//Mais de 10 anos
							ptoutro[3] = (toutro[3]*100)/info.length;
							ptoutro[3] = ptoutro[3].toFixed(2);
						//--//
					//FimApuracaoCasaoutro//
				//--//

				//Chama a fun~ção e gera o gráfico//
				graf_situacao_residencia(ptpropria,ptalugada,ptfinanciada,ptoutro,ppropria,palugada,pfinanciada,poutro);
				//--//
			});
			//-FIM_BT_SITUCAO_RESIDENCIA-//


			//INICIO_BT_COMPO_FAMILIAR//
			$('#bt_compo_familiar').on('click',function(){
				
				//Variáveis contadoras
				var compo1 = 0, compo2 = 0 , compo3 = 0, compo4 = 0; compo5 = 0;

				//Váriaveis de porcentagem
				var pcompo1 = 0, pcompo2 = 0 , pcompo3 = 0, pcompo4 = 0; pcompo5 = 0;
				
				//Percorrendo os valores//
				for(let i in info){
					
					if(info[i].QUANTASPESSOASMORAMNARESIDÊNCIA=='1')
					//Mora com 1 pessoa
					{
						compo1++;
					}
					else if(info[i].QUANTASPESSOASMORAMNARESIDÊNCIA=='2')
					//Mora com 2 pessoas
					{
						compo2++;

					}else if(info[i].QUANTASPESSOASMORAMNARESIDÊNCIA=='3')
					//Mora com 3 pessoas
					{
						compo3++;

					}else if(info[i].QUANTASPESSOASMORAMNARESIDÊNCIA=='4')
					//Mora com 4 pessoas
					{
						compo4++;

					}else if(info[i].QUANTASPESSOASMORAMNARESIDÊNCIA=='5 ou mais')
					//Mora com 5 ou mais pessoas
					{
						compo5++;

					};
				}
				//-FimFor-//
				
				//Porcentagens em cima dos resultado//
					//% de quem mora com 1
					pcompo1 = (compo1*100)/info.length;
					pcompo1 = pcompo1.toFixed(2);

					//% de quem mora com 2
					pcompo2 = (compo2*100)/info.length;
					pcompo2 = pcompo2.toFixed(2);

					//% de quem mora com 3
					pcompo3 = (compo3*100)/info.length;
					pcompo3 = pcompo3.toFixed(2);

					//% de quem mora com 4
					pcompo4 = (compo4*100)/info.length;
					pcompo4 = pcompo4.toFixed(2);

					//% de quem mora com 5 ou mais
					pcompo5 = (compo5*100)/info.length;
					pcompo5 = pcompo5.toFixed(2);

				//--//

				//Chama a função e crio o gráfico//
				graf_compo_familiar(pcompo1,pcompo2,pcompo3,pcompo4,pcompo5);
				//--/
			});
			//-FIM_BT_COMPO_FAMILIAR-//


			//INICIO_BT_RENDA_FAMILIAR//
			$('#bt_renda_familiar').on('click',function(){
				
				//Variáveis contadoras
				var sal1 = 0, entre1e2 = 0, entre2e3 = 0, entre3e4 = 0, entre4e5 = 0, maisde5 = 0;

				//Váriaveis de porcentagem
				var psal1 = 0, pentre1e2 = 0, pentre2e3 = 0, pentre3e4 = 0, pentre4e5 = 0, pmaisde5 = 0;
				
				//Percorrendo os valores//
				for(let i in info){

					//InicioCondições//
					if(info[i].QUALARENDAFAMILIAR2!='entre 1 e 2 salários mínimos' && info[i].QUALARENDAFAMILIAR2!='entre 2 e 3 salários mínimos' &&
					   info[i].QUALARENDAFAMILIAR2!='entre 3 e 4 salários mínimos' && info[i].QUALARENDAFAMILIAR2!='entre 4 e 5 salários mínimos' &&
					   info[i].QUALARENDAFAMILIAR2!='mais de 5 salários mínimos')
					//Caso a familia conte com somente 1 salário mínimo//
					{
						sal1++;
					}
					else if(info[i].QUALARENDAFAMILIAR2=='entre 1 e 2 salários mínimos')
					//Entre 1 e 2 salarios//
					{
						entre1e2++;
					}
					else if(info[i].QUALARENDAFAMILIAR2=='entre 2 e 3 salários mínimos')
					//Entre 2 e 3 salarios//
					{
						entre2e3++;
					}
					else if(info[i].QUALARENDAFAMILIAR2=='entre 3 e 4 salários mínimos')
					//Entre 3 e 4 salarios//
					{	
						entre3e4++;
					}
					else if(info[i].QUALARENDAFAMILIAR2=='entre 4 e 5 salários mínimos')
					//Entre 4 e 5 salarios//
					{
						entre4e5++;
					}
					else if(info[i].QUALARENDAFAMILIAR2=='mais de 5 salários mínimos')
					//Mais de 5 salarios//
					{
						maisde5++;
					};
					//FimCondiçoes//
					
				};
				//-FimFor-//
				
				//Porcentagens em cima dos resultado//
					
					//% de 1 salario
					psal1 = (sal1*100)/info.length;
					psal1 = psal1.toFixed(2);

					//% Entre 1 e 2 salarios
					pentre1e2 = (entre1e2*100)/info.length;
					pentre1e2 = pentre1e2.toFixed(2);

					//% Entre 2 e 3 salarios
					pentre2e3 = (entre2e3*100)/info.length;
					pentre2e3 = pentre2e3.toFixed(2);

					//% Entre 3 e 4 salarios
					pentre3e4 = (entre3e4*100)/info.length;
					pentre3e4 = pentre3e4.toFixed(2);

					//% Entre 4 e 5 salarios
					pentre4e5 = (entre4e5*100)/info.length;
					pentre4e5 = pentre4e5.toFixed(2);

					//% Mais de 5 salarios
					pmaisde5 = (maisde5*100)/info.length;
					pmaisde5 = pmaisde5.toFixed(2);

				//--//

				//Chama a função e crio o gráfico//
				graf_renda_familiar(psal1,pentre1e2,pentre2e3,pentre3e4,pentre4e5,pmaisde5);
				//--/
			});
			//-FIM_BT_RENDA_FAMILIAR-//

			//INICIO_BT_TRABALHO_INDIVIDUAL//
			$('#bt_trabalho_individual').on('click',function(){
				
				//Variáveis contadoras de situação de trabalho
				var desem = 0, clt_formal = 0, clt_remoto = 0, estagio = 0, autonomo = 0, empreemdedor = 0;

				//Váriaveis de porcentagem de situação de trabalho
				var pdesem = 0, pclt_formal = 0, pclt_remoto = 0, pestagio = 0, pautonomo = 0, pempreemdedor = 0;
				
				//váriaveis de tempo/período por situação de trabalho
				var tclt_formal = [0,0,0,0,0,0], tclt_remoto = [0,0,0,0,0,0], testagio = [0,0,0,0,0,0], tautonomo = [0,0,0,0,0,0], tempreemdedor = [0,0,0,0,0,0];
				
				//váriaveis de porcentagem de tempo/período por situação de trabalho
				var ptclt_formal = [0,0,0,0,0,0], ptclt_remoto = [0,0,0,0,0,0], ptestagio = [0,0,0,0,0,0], ptautonomo = [0,0,0,0,0,0], ptempreemdedor = [0,0,0,0,0,0];


				/*
					Indices da variavel de tempo:

					0 - Matutino (manha)
					1 - vespertino (tarde)
					2 - noturno (noite)
					3 - manhã e tarde (integral)
					4 - em regime de turnos
					5 - por produção
				*/

				//Percorrendo os valores//
				for(let i in info){

					//Verifica a condição de trabalho//
					switch(info[i].VOCÊTRABALHAQUALOREGIMEDETRABALHO){

						//Caso seja desempregado
						case 'Estou desempregado':

							desem++;

						break;

						//Caso seja Formal CLT
						case 'Formal CLT (na empresa)':

							//Verifica período
								if(info[i].EMQUALPERÍODO=='Matutino (manhã)')
								//Matutino
								{
									tclt_formal[0]++;
								}
								else if(info[i].EMQUALPERÍODO=='Vespertino (tarde)')
								//Vespertino
								{	
									tclt_formal[1]++;
								}
								else if(info[i].EMQUALPERÍODO=='Noturno (noite)')
								//Noturno
								{
									tclt_formal[2]++;
								}
								else if(info[i].EMQUALPERÍODO=='Manhã e tarde (integral)')
								//Manhã e Tarde Integral
								{
									tclt_formal[3]++;
								}
								else if(info[i].EMQUALPERÍODO=='Em regime de turnos')
								//Em regime de turnos
								{
									tclt_formal[4]++;
								}
								else if(info[i].EMQUALPERÍODO=='Por produção')
								//Por período
								{
									tclt_formal[5]++;
								};
							//FimVerificaPeríodo

						break;

						//Caso seja Remoto CLT
						case 'Remoto CLT ( home office, home based ou coworking)':

							//Verifica período
								if(info[i].EMQUALPERÍODO=='Matutino (manhã)')
								//Matutino
								{
									tclt_remoto[0]++;
								}
								else if(info[i].EMQUALPERÍODO=='Vespertino (tarde)')
								//Vespertino
								{	
									tclt_remoto[1]++;
								}
								else if(info[i].EMQUALPERÍODO=='Noturno (noite)')
								//Noturno
								{
									tclt_remoto[2]++;
								}
								else if(info[i].EMQUALPERÍODO=='Manhã e tarde (integral)')
								//Manhã e Tarde Integral
								{
									tclt_remoto[3]++;
								}
								else if(info[i].EMQUALPERÍODO=='Em regime de turnos')
								//Em regime de turnos
								{
									tclt_remoto[4]++;
								}
								else if(info[i].EMQUALPERÍODO=='Por produção')
								//Por período
								{
									tclt_remoto[5]++;
								};
							//FimVerificaPeríodo

						break;

						//Caso seja Estágio
						case 'Estágio':

							//Verifica período
								if(info[i].EMQUALPERÍODO=='Matutino (manhã)')
								//Matutino
								{
									testagio[0]++;
								}
								else if(info[i].EMQUALPERÍODO=='Vespertino (tarde)')
								//Vespertino
								{	
									testagio[1]++;
								}
								else if(info[i].EMQUALPERÍODO=='Noturno (noite)')
								//Noturno
								{
									testagio[2]++;
								}
								else if(info[i].EMQUALPERÍODO=='Manhã e tarde (integral)')
								//Manhã e Tarde Integral
								{
									testagio[3]++;
								}
								else if(info[i].EMQUALPERÍODO=='Em regime de turnos')
								//Em regime de turnos
								{
									testagio[4]++;
								}
								else if(info[i].EMQUALPERÍODO=='Por produção')
								//Por período
								{
									testagio[5]++;
								};
							//FimVerificaPeríodo

						break;

						//Caso seja Autonomo
						case 'Autônomo (freelancer)':

							//Verifica período
								if(info[i].EMQUALPERÍODO=='Matutino (manhã)')
								//Matutino
								{
									tautonomo[0]++;
								}
								else if(info[i].EMQUALPERÍODO=='Vespertino (tarde)')
								//Vespertino
								{	
									tautonomo[1]++;
								}
								else if(info[i].EMQUALPERÍODO=='Noturno (noite)')
								//Noturno
								{
									tautonomo[2]++;
								}
								else if(info[i].EMQUALPERÍODO=='Manhã e tarde (integral)')
								//Manhã e Tarde Integral
								{
									tautonomo[3]++;
								}
								else if(info[i].EMQUALPERÍODO=='Em regime de turnos')
								//Em regime de turnos
								{
									tautonomo[4]++;
								}
								else if(info[i].EMQUALPERÍODO=='Por produção')
								//Por período
								{
									tautonomo[5]++;
								};
							//FimVerificaPeríodo

						break;

						//Caso seja Empreendedor
						case 'Empreendedor (proprietário)':

							//Verifica período
								if(info[i].EMQUALPERÍODO=='Matutino (manhã)')
								//Matutino
								{
									tempreemdedor[0]++;
								}
								else if(info[i].EMQUALPERÍODO=='Vespertino (tarde)')
								//Vespertino
								{	
									tempreemdedor[1]++;
								}
								else if(info[i].EMQUALPERÍODO=='Noturno (noite)')
								//Noturno
								{
									tempreemdedor[2]++;
								}
								else if(info[i].EMQUALPERÍODO=='Manhã e tarde (integral)')
								//Manhã e Tarde Integral
								{
									tempreemdedor[3]++;
								}
								else if(info[i].EMQUALPERÍODO=='Em regime de turnos')
								//Em regime de turnos
								{
									tempreemdedor[4]++;
								}
								else if(info[i].EMQUALPERÍODO=='Por produção')
								//Por período
								{
									tempreemdedor[5]++;
								};
							//FimVerificaPeríodo

						break;
					};
					//FimCondiçãoTrabalho//
					
				};
				//-FimFor-//
				
				//Porcentagens em cima dos resultado//
				
					//Porcentagem do total por situação de trabalho//

						//Totais Gerais//
							//Desempregado
							pdesem = (desem*100)/info.length;
							pdesem = pdesem.toFixed(2);

							//Formal CLT
							pclt_formal = (clt_formal*100)/info.length;
							pclt_formal = pclt_formal.toFixed(2);

							//Formal Remoto
							pclt_remoto = (clt_remoto*100)/info.length;
							pclt_remoto = pclt_remoto.toFixed(2);

							//Estagio
							pestagio = (estagio*100)/info.length;
							pestagio = pestagio.toFixed(2);

							//Autonomo
							pautonomo = (autonomo*100)/info.length;
							pautonomo = pautonomo.toFixed(2);

							//Empreendedor
							pempreemdedor = (empreemdedor*100)/info.length;
							pempreemdedor = pempreemdedor.toFixed(2);
						//--//

						//Porcentagens de Tempo//	
							//Formal CLT
								// % Matutino
								ptclt_formal[0] = (tclt_formal[0]*100)/info.length;
								ptclt_formal[0] = ptclt_formal[0].toFixed(2);

								// % Vespertino
								ptclt_formal[1] = (tclt_formal[1]*100)/info.length;
								ptclt_formal[1] = ptclt_formal[1].toFixed(2);

								// % Noturno
								ptclt_formal[2] = (tclt_formal[2]*100)/info.length;
								ptclt_formal[2] = ptclt_formal[2].toFixed(2);

								// % Manha_Tarde
								ptclt_formal[3] = (tclt_formal[3]*100)/info.length;
								ptclt_formal[3] = ptclt_formal[3].toFixed(2);

								// % Regime_Turnos
								ptclt_formal[4] = (tclt_formal[4]*100)/info.length;
								ptclt_formal[4] = ptclt_formal[4].toFixed(2);

								// % Por_Producao
								ptclt_formal[5] = (tclt_formal[5]*100)/info.length;
								ptclt_formal[5] = ptclt_formal[5].toFixed(2);
							//-FimCLTFormal-//

							//Formal Remoto
								// % Matutino
								ptclt_remoto[0] = (tclt_remoto[0]*100)/info.length;
								ptclt_remoto[0] = ptclt_remoto[0].toFixed(2);

								// % Vespertino
								ptclt_remoto[1] = (tclt_remoto[1]*100)/info.length;
								ptclt_remoto[1] = ptclt_remoto[1].toFixed(2);

								// % Noturno
								ptclt_remoto[2] = (tclt_remoto[2]*100)/info.length;
								ptclt_remoto[2] = ptclt_remoto[2].toFixed(2);

								// % Manha_Tarde
								ptclt_remoto[3] = (tclt_remoto[3]*100)/info.length;
								ptclt_remoto[3] = ptclt_remoto[3].toFixed(2);

								// % Regime_Turnos
								ptclt_remoto[4] = (tclt_remoto[4]*100)/info.length;
								ptclt_remoto[4] = ptclt_remoto[4].toFixed(2);

								// % PorProducao
								ptclt_remoto[5] = (tclt_remoto[5]*100)/info.length;
								ptclt_remoto[5] = ptclt_remoto[5].toFixed(2);
							//-FimRemoto-//
							
							//Estagio
								// % Matutino
								ptestagio[0] = (testagio[0]*100)/info.length;
								ptestagio[0] = ptestagio[0].toFixed(2);

								// % Vespertino
								ptestagio[1] = (testagio[1]*100)/info.length;
								ptestagio[1] = ptestagio[1].toFixed(2);

								// % Noturno
								ptestagio[2] = (testagio[2]*100)/info.length;
								ptestagio[2] = ptestagio[2].toFixed(2);

								// % Manha_Tarde
								ptestagio[3] = (testagio[3]*100)/info.length;
								ptestagio[3] = ptestagio[3].toFixed(2);

								// % Regime_Turnos
								ptestagio[4] = (testagio[4]*100)/info.length;
								ptestagio[4] = ptestagio[4].toFixed(2);

								// % PorProducao
								ptestagio[5] = (testagio[5]*100)/info.length;
								ptestagio[5] = ptestagio[5].toFixed(2);
							//FimEstagio//
							
							//Autonomo
								// % Matutino
								ptautonomo[0] = (tautonomo[0]*100)/info.length;
								ptautonomo[0] = ptautonomo[0].toFixed(2);

								// % Vespertino
								ptautonomo[1] = (tautonomo[1]*100)/info.length;
								ptautonomo[1] = ptautonomo[1].toFixed(2);

								// % Noturno
								ptautonomo[2] = (tautonomo[2]*100)/info.length;
								ptautonomo[2] = ptautonomo[2].toFixed(2);

								// % Manha_Tarde
								ptautonomo[3] = (tautonomo[3]*100)/info.length;
								ptautonomo[3] = ptautonomo[3].toFixed(2);

								// % Regime_Turnos
								ptautonomo[4] = (tautonomo[4]*100)/info.length;
								ptautonomo[4] = ptautonomo[4].toFixed(2);

								// % PorProducao
								ptautonomo[5] = (tautonomo[5]*100)/info.length;
								ptautonomo[5] = ptautonomo[5].toFixed(2);

							//FimAutonomo//

							//Empreendedor
								// % Matutino
								ptempreemdedor[0] = (tempreemdedor[0]*100)/info.length;
								ptempreemdedor[0] = ptempreemdedor[0].toFixed(2);

								// % Vespertino
								ptempreemdedor[1] = (tempreemdedor[1]*100)/info.length;
								ptempreemdedor[1] = ptempreemdedor[1].toFixed(2);

								// % Noturno
								ptempreemdedor[2] = (tempreemdedor[2]*100)/info.length;
								ptempreemdedor[2] = ptempreemdedor[2].toFixed(2);

								// % Manha_Tarde
								ptempreemdedor[3] = (tempreemdedor[3]*100)/info.length;
								ptempreemdedor[3] = ptempreemdedor[3].toFixed(2);

								// % Regime_Turnos
								ptempreemdedor[4] = (tempreemdedor[4]*100)/info.length;
								ptempreemdedor[4] = ptempreemdedor[4].toFixed(2);

								// % PorProducao
								ptempreemdedor[5] = (tempreemdedor[5]*100)/info.length;
								ptempreemdedor[5] = ptempreemdedor[5].toFixed(2);

							//FimEmpreendedor//
						//--//
					//FimPorcentagemPorSituaçãoDeTrabalho//
				//--//

				//Chama a função e crio o gráfico//
				graf_trabalho_individual(ptclt_formal,ptclt_remoto,ptestagio,ptautonomo,ptempreemdedor,pclt_formal,pclt_remoto,pestagio,pautonomo,pempreemdedor);
				//--/
			});
			//-FIM_BT_TRABALHO_INDIVIDUAL-//

			//INICIO_BT_MORA_QUEM//
			$('#bt_mora_quem').on('click',function(){
				
				//Variaveis Contadoras
				var com_pais = 0, com_fam_espo = 0, com_espo = 0, com_amigos = 0, outros = 0;

				//Variaveis de Porcentagem
				var pcom_pais = 0, pcom_fam_espo = 0, pcom_espo = 0, pcom_amigos = 0, poutros = 0;

				//Percorrendo os valores
				for(let i in info){

					//Condições
						if(info[i].COMQUEMMORA2=='com meus pais e/ou parentes')
						//Mora com os Pais
						{
							com_pais++;
						}
						else if(info[i].COMQUEMMORA2=='com a família de meu esposo(a), companheiro(a)')
						//Mora com a familia do esposo(a)
						{
							com_fam_espo++;
						}
						else if(info[i].COMQUEMMORA2=='com meu esposo(a), companheiro(a)')
						//Mora com esposo(a)
						{
							com_espo++;
						}
						else if(info[i].COMQUEMMORA2=='com amigos')
						//Mora com amigos
						{
							com_amigos++;
						}
						else if(info[i].COMQUEMMORA2=='outros')
						{
							outros++;
						};
					//FimCondições
				}
				//FimPercorrendovalores//

				//Calculando a Porcentagem em cima dos resultados//
					//Com os Pais
					pcom_pais = (com_pais*100)/info.length;
					pcom_pais = pcom_pais.toFixed(2);

					//Com Familia Esposo(a)
					pcom_fam_espo = (com_fam_espo*100)/info.length;
					pcom_fam_espo = pcom_fam_espo.toFixed(2);

					//Com esposo(a)
					pcom_espo = (com_espo*100)/info.length;
					pcom_espo = pcom_espo.toFixed(2);

					//Com Amigos
					pcom_amigos = (com_amigos*100)/info.length;
					pcom_amigos = pcom_amigos.toFixed(2);

					//Outros
					poutros = (outros*100)/info.length;
					poutros = poutros.toFixed(2);
				//-FimPorcentagem//

				//Chama A função e cria o Gráfico//
					graf_mora_quem(pcom_pais,pcom_fam_espo,pcom_espo,pcom_amigos,poutros);
				//--//
					
			});
			//-FIM_BT_MORA_QUEM-//

			//INICIO_BT_VIDA_ESCOLAR//
			$('#bt_vida_escolar').on('click',function(){

				//Variaveis contadoras
				var ncurso = 0, tecnico = 0, grad_bach = 0, grad_licen = 0, tecnol = 0;

				//Variaveis contadoras de qual tipo de escola frequentou//
				/*
					Legenda:

					Será usado um array para cada opção, pra usar menos variáveis:

					ex: ncurso = [  0 , 1 , 2, 3 ] - Repare as posições;

					Descrição de cada posição
						0 - Integralmente em escola particular
						1 - Integralmente em escola pública
						2 - Maior parte em escola pública
						3 - Maior parte em escola particular
											
					OBS: Teremos uma variavel para cada situação.

					Então na hora de somar quantas pessoas tem em cada opção eu vou usar,
					array[posicao_referente]++;
					
					Ex: Se o indivíduo não possui curso superior ou tecnico anterior, eu chamo a variavel ncurso[], e verifico se estudou em qual tipo de escola, dependendo da resposta eu guardo na posição equivalente.

				*/
				var qncurso = [0,0,0,0], qtecnico = [0,0,0,0], qgrad_bach = [0,0,0,0], qgrad_licen = [0,0,0,0], qtecnol = [0,0,0,0];

				/*Variaveis de porcentagens quantidade de pessoas em cada tipo de ensino, respeita as mesmas regras de posição, só que guarda a %
				  de cada tipo diante de cada resposta, por exemplo - Quantos % que não tem curso superior estudaram em escola pública
				  diante de todos que responderam, e assim por diante respeitando todas as posições.*/
				var ptncurso = [0,0,0,0], pttecnico = [0,0,0,0], ptgrad_bach = [0,0,0,0], ptgrad_licen = [0,0,0,0], pttecnol = [0,0,0,0];
				  
				//Variaveis de porcentagem
				var pncurso = 0, ptecnico = 0, pgrad_bach = 0, pgrad_licen = 0, ptecnol = 0;
				
				//Percorrendo os valores//
				for(let i in info){

					//Condições (Verifica a situação da casa)
					
					switch(info[i].VOCÊJÁFEZOUTROCURSO){
						
						//Se não tiver feito nenhum curso anterior//
						case 'não':
							//Verifique tipo de ensino básico//
							if(info[i].EMQUAISESCOLASESTUDOU2=='integralmente em escola particular')
							//estudou integralmente em escola particular	
							{
								qncurso[0]++;
							}
							else if(info[i].EMQUAISESCOLASESTUDOU2=='integralmente em escola pública (federal, estadual e/ou municipal)')
							//estudou integralmente em escola pública
							{
								qncurso[1]++;
							}
							else if(info[i].EMQUAISESCOLASESTUDOU2=='maior parte em escola pública')
							//estudou a maior parte em escola pública
							{
								qncurso[2]++;
							}
							else if(info[i].EMQUAISESCOLASESTUDOU2=='maior parte em escola particular')
							//estudou a maior parte em escola particular
							{
								qncurso[3]++;
							};
						break;

						//Se estudou técnico//
						case 'técnico':
							//Verifique tipo de ensino básico//
							if(info[i].EMQUAISESCOLASESTUDOU2=='integralmente em escola particular')
							//estudou integralmente em escola particular	
							{
								qtecnico[0]++;
							}
							else if(info[i].EMQUAISESCOLASESTUDOU2=='integralmente em escola pública (federal, estadual e/ou municipal)')
							//estudou integralmente em escola pública
							{
								qtecnico[1]++;
							}
							else if(info[i].EMQUAISESCOLASESTUDOU2=='maior parte em escola pública')
							//estudou a maior parte em escola pública
							{
								qtecnico[2]++;
							}
							else if(info[i].EMQUAISESCOLASESTUDOU2=='maior parte em escola particular')
							//estudou a maior parte em escola particular
							{
								qtecnico[3]++;
							};
						break;

						case 'graduação (bacharelado)':
							//Verifique tipo de ensino básico//
							if(info[i].EMQUAISESCOLASESTUDOU2=='integralmente em escola particular')
							//estudou integralmente em escola particular	
							{
								qgrad_bach[0]++;
							}
							else if(info[i].EMQUAISESCOLASESTUDOU2=='integralmente em escola pública (federal, estadual e/ou municipal)')
							//estudou integralmente em escola pública
							{
								qgrad_bach[1]++;
							}
							else if(info[i].EMQUAISESCOLASESTUDOU2=='maior parte em escola pública')
							//estudou a maior parte em escola pública
							{
								qgrad_bach[2]++;
							}
							else if(info[i].EMQUAISESCOLASESTUDOU2=='maior parte em escola particular')
							//estudou a maior parte em escola particular
							{
								qgrad_bach[3]++;
							};
						break;

						//Se fez graduação bacharelado//
						case 'graduação (licenciatura)':
							//Verifique tipo de ensino básico//
							if(info[i].EMQUAISESCOLASESTUDOU2=='integralmente em escola particular')
							//estudou integralmente em escola particular	
							{
								qgrad_licen[0]++;
							}
							else if(info[i].EMQUAISESCOLASESTUDOU2=='integralmente em escola pública (federal, estadual e/ou municipal)')
							//estudou integralmente em escola pública
							{
								qgrad_licen[1]++;
							}
							else if(info[i].EMQUAISESCOLASESTUDOU2=='maior parte em escola pública')
							//estudou a maior parte em escola pública
							{
								qgrad_licen[2]++;
							}
							else if(info[i].EMQUAISESCOLASESTUDOU2=='maior parte em escola particular')
							//estudou a maior parte em escola particular
							{
								qgrad_licen[3]++;
							};
						break;

						//Se fez graduação tecnólogo//
						case 'graduação em tecnologia (tecnólogo)':
							//Verifique tipo de ensino básico//
							if(info[i].EMQUAISESCOLASESTUDOU2=='integralmente em escola particular')
							//estudou integralmente em escola particular	
							{
								qtecnol[0]++;
							}
							else if(info[i].EMQUAISESCOLASESTUDOU2=='integralmente em escola pública (federal, estadual e/ou municipal)')
							//estudou integralmente em escola pública
							{
								qtecnol[1]++;
							}
							else if(info[i].EMQUAISESCOLASESTUDOU2=='maior parte em escola pública')
							//estudou a maior parte em escola pública
							{
								qtecnol[2]++;
							}
							else if(info[i].EMQUAISESCOLASESTUDOU2=='maior parte em escola particular')
							//estudou a maior parte em escola particular
							{
								qtecnol[3]++;
							};
						break;
					};
					//FimCondição//	
				};
				//FimFor//


				//Porcentagens sobre os resultados//

					//Apuração dos Alunos que não tem cursos anteriores//
						//% de quem não tem curso anterior
						pncurso = (ncurso*100)/info.length;
						pncurso = pncurso.toFixed(2);

						//% de quem não fez nenhum curso em cada tipo de educação básica//
							//Integralmente Pública
							ptncurso[0] = (qncurso[0]*100)/info.length;
							ptncurso[0] = ptncurso[0].toFixed(2);

							//Integralmente particular
							ptncurso[1] = (qncurso[1]*100)/info.length;
							ptncurso[1] = ptncurso[1].toFixed(2);

							//Maior parte em escola pública
							ptncurso[2] = (qncurso[2]*100)/info.length;
							ptncurso[2] = ptncurso[2].toFixed(2);

							//Maior parte em escola particular
							ptncurso[3] = (qncurso[3]*100)/info.length;
							ptncurso[3] = ptncurso[3].toFixed(2);
						//--//
					//FimApuracaoNãotemCurso//

					//ApuracaoCursosTecnicos//
						//% de quem tem curso tecnico
						ptecnico = (tecnico*100)/info.length;
						ptecnico = ptecnico.toFixed(2);

						//% de quem tem curso tecnico em relação a cada tipo de educação básica//
							//Integralmente Pública
							pttecnico[0] = (qtecnico[0]*100)/info.length;
							pttecnico[0] = pttecnico[0].toFixed(2);

							//Integralmente Particular
							pttecnico[1] = (qtecnico[1]*100)/info.length;
							pttecnico[1] = pttecnico[1].toFixed(2);

							//Maior parte em escola pública
							pttecnico[2] = (qtecnico[2]*100)/info.length;
							pttecnico[2] = pttecnico[2].toFixed(2);

							//Maior parte em escola particular 
							pttecnico[3] = (qtecnico[3]*100)/info.length;
							pttecnico[3] = pttecnico[3].toFixed(2);
						//--//
					//FimApuracaoCursoTécnico//

					//ApuracaoCursoBacharelado//
						//% de quem tem bacharelado
						pgrad_bach = (grad_bach*100)/info.length;
						pgrad_bach = pgrad_bach.toFixed(2);

						//% de quem tem bacharelado em cada tipo de educação básica//
							//Integralmente em escola pública
							ptgrad_bach[0] = (qgrad_bach[0]*100)/info.length;
							ptgrad_bach[0] = ptgrad_bach[0].toFixed(2);

							//Integralmente em escola particular
							ptgrad_bach[1] = (qgrad_bach[1]*100)/info.length;
							ptgrad_bach[1] = ptgrad_bach[1].toFixed(2);

							//Maior parte em escola pública
							ptgrad_bach[2] = (qgrad_bach[2]*100)/info.length;
							ptgrad_bach[2] = ptgrad_bach[2].toFixed(2);

							//Maior parte em escola particular
							ptgrad_bach[3] = (qgrad_bach[3]*100)/info.length;
							ptgrad_bach[3] = ptgrad_bach[3].toFixed(2);
						//--//
					//FimApuracaoBacharelado//

					//ApuracaoLicenciatura//
						//% de quem tem curso de licenciatura
						pgrad_licen = (grad_licen*100)/info.length;
						pgrad_licen = pgrad_licen.toFixed(2);

						//% de quem tem licenciatura//
							//Integralmente em escola pública
							ptgrad_licen[0] = (qgrad_licen[0]*100)/info.length;
							ptgrad_licen[0] = ptgrad_licen[0].toFixed(2);

							//Integralmente em escola particular
							ptgrad_licen[1] = (qgrad_licen[1]*100)/info.length;
							ptgrad_licen[1] = ptgrad_licen[1].toFixed(2);

							//Maior parte em escola pública
							ptgrad_licen[2] = (qgrad_licen[2]*100)/info.length;
							ptgrad_licen[2] = ptgrad_licen[2].toFixed(2);

							//Maior parte em escola particular
							ptgrad_bach[3] = (qgrad_bach[3]*100)/info.length;
							ptgrad_bach[3] = ptgrad_bach[3].toFixed(2);
						//--//
					//FimApuracaoLicenciatura//
				//--//

					//ApuracaoTecnólogo//
						//% de quem tem curso de graduação em tecnologia
						pgrad_licen = (grad_licen*100)/info.length;
						pgrad_licen = pgrad_licen.toFixed(2);

						//% de quem tem licenciatura//
							//Integralmente em escola pública
							pttecnol[0] = (qtecnol[0]*100)/info.length;
							pttecnol[0] = pttecnol[0].toFixed(2);

							//Integralmente em escola particular
							pttecnol[1] = (qtecnol[1]*100)/info.length;
							pttecnol[1] = pttecnol[1].toFixed(2);

							//Maior parte em escola pública
							pttecnol[2] = (qtecnol[2]*100)/info.length;
							pttecnol[2] = pttecnol[2].toFixed(2);

							//Maior parte em escola particular
							pttecnol[3] = (qtecnol[3]*100)/info.length;
							pttecnol[3] = pttecnol[3].toFixed(2);
						//--//
					//FimApuracaoLicenciatura//
				//--//

				//Chama a fun~ção e gera o gráfico//
				graf_vida_escolar(ptncurso,pttecnico,ptgrad_bach,ptgrad_licen,pttecnol,pncurso,ptecnico,pgrad_bach,pgrad_licen,ptecnol);
				//--//
			});
			//-FIM_BT_VIDA_ESCOLAR-//

			//INÍCIO_BT_CONHECE_INFORMATICA
			$('#bt_conhece_informat').on('click',function(){

				//Variaveis contadoras
				var nenhum = '', basico = '', intermed = '', avancado = '';
				// Variaveis de %
				var pnenhum = 0, pbasico = 0, pintermed = 0, pavancado = 0; 
				
				//Para cada linha faça
				for(let i in info){
					
					//Condições//
					if(info[i].QUALONÍVELDOSEUCONHECIMENTOEMINFORMÁTICA2=='nenhum')
					{
						nenhum++;
					}
					else if(info[i].QUALONÍVELDOSEUCONHECIMENTOEMINFORMÁTICA2=='básico')
					{
						basico++;
					}
					else if(info[i].QUALONÍVELDOSEUCONHECIMENTOEMINFORMÁTICA2=='intermediário')
					{
						intermed++;
					}
					else if(info[i].QUALONÍVELDOSEUCONHECIMENTOEMINFORMÁTICA2=='avançado')
					{
						avancado++;
					};
					//-FimCondições-//
				};
				//Fimfor//

				//Porcentagens dos resultados diante do total//
					//% de pessoa com nenhum conhecimento previo//
					pnenhum = (nenhum*100)/info.length;
					pnenhum = nenhum.toFixed(2);
					
					//% conhecimentos básicos//
					pbasico = (basico*100)/info.length;
					pbasico = pbasico.toFixed(2);

					//% conhecimentos intermediários//
					pintermed = (intermed*100)/info.length;
					pintermed = pintermed.toFixed(2);

					//% conhecimentos avançados//
					pavancado = (avancado*100)/info.length;
					pavancado = pavancado.toFixed(2);


				//--//


				//Chama a função e passa os valores//
				graf_conhece_informat(pnenhum,pbasico,pintermed,pavancado);
				//--//
			});
			//-FIM_BT_CONHECIMENTO_INFORMAT//

			//INICIO_BT_DEFICIENCIA//
			$('#bt_deficiencia').on('click',function(){

				//Variaveis conatdoras//
				var ndef = 0, visual = 0, audi = 0, fisi = 0, intelec = 0;

				//Porcentagens de filhos//
				var pndef = 0, pvisual = 0, paudi = 0, pfisi = 0, pintelec = 0;


				//Percorrendo os dados//
				for(let i in info){

					//Se tem algum tipo de deficiência
					if(info[i].ÉPORTADORDENECESSIDADESESPECIAIS=='Sim'){
						
						//Se tem deficiência visual
						if(info[i].ESPECIFIQUE=='visual')
						{
							visual++;
						}
						//Se tem deficiência visual
						else if(info[i].ESPECIFIQUE=='auditiva')
						{
							audi++;
						}
						//Se tem deficiência visual
						else if(info[i].ESPECIFIQUE=='física')
						{
							fisi++;
						}
						//Se tem deficiência visual
						else if(info[i].ESPECIFIQUE=='intelectual')
						{
							intelec++;
						};
					}
					//Se não tem nenhum tipo de deficiência//
					else if(info[i].ÉPORTADORDENECESSIDADESESPECIAIS=='Não')
					{
						//conta quantos não tem deficiência alguma//
						ndef++;
					};
					//FimCondição//
				};
				//FimFor//


				//Porcentagens dos resultados sobre o total//
					//% de quem tem deficiência visual
					pvisual = (visual*100)/info.length;
					pvisual = pvisual.toFixed(2);

					//% de quem tem deficiência auditiva.
					paudi = (audi*100)/info.length;
					paudi = paudi.toFixed(2);

					//% de quem tem deficiência física.
					pfisi = (fisi*100)/info.length;
					pfisi = pfisi.toFixed(2);

					//% de quem tem deficiência intelectual.
					pintelec = (intelec*100)/info.length;
					pintelec = pintelec.toFixed(2);

					//% de quem não tem nenhum tipo de defiência
					pndef = (ndef*100)/info.length;
					pndef = pndef.toFixed(2);
				//--//

				//Chama a função e monta o gráfico//
				graf_deficiencia(pndef,pvisual,paudi,pfisi,pintelec);
				//-//
			});
			//FIM_BT_DEFICIÊNCIA//


			//INICIO_BT_SAUDE//
			$('#bt_saude').on('click',function(){

				//Variaveis conatdoras//
				var uni_sus = 0, uni_part = 0, conv_trab = 0, conv_part = 0, sus_part = 0;

				//Porcentagens de tipos de serviços//
				var puni_sus = 0, puni_part = 0, pconv_trab = 0, pconv_part = 0, p_sus_part = 0;


				//Percorrendo os dados//
				for(let i in info){

					//Se faz uso somente dos serviços do SUS
					if(info[i].TEMACESSOAATENDIMENTODESAÚDE=='somente SUS')
					{
						uni_sus++;
					}
					//Se faz uso somente de serviços particulares
					if(info[i].TEMACESSOAATENDIMENTODESAÚDE=='somente particular')
					{
						uni_part++;
					}
					//Se tem convênio no trabalho 
					if(info[i].TEMACESSOAATENDIMENTODESAÚDE=='convênio (trabalho)')
					{
						conv_trab++;
					}
					//Se tem convênio particular
					if(info[i].TEMACESSOAATENDIMENTODESAÚDE=='convênio (particular)')
					{
						conv_part++;
					}
					//Se faz uso do SUS e particular
					if(info[i].TEMACESSOAATENDIMENTODESAÚDE=='SUS e particular')
					{
						sus_part++;
					};
					//FimCondição//
				};
				//FimFor//


				//Porcentagens dos resultados sobre o total//
					//% de quem faz uso só do SUS
					puni_sus = (uni_sus*100)/info.length;
					puni_sus = puni_sus.toFixed(2);

					//% de quem faz uso só de serviços particulares de saúde
					puni_part = (uni_part*100)/info.length;
					puni_part = puni_part.toFixed(2);

					//% de quem possui convênio em razão do trabalho
					pconv_trab = (conv_trab*100)/info.length;
					pconv_trab = pconv_trab.toFixed(2);

					//% de quem possui convênio, porém particular
					pconv_part = (conv_part*100)/info.length;
					pconv_part = pconv_part.toFixed(2);

					//% de quem faz uso do SUS e de serviços particulares
					p_sus_part = (sus_part*100)/info.length;
					p_sus_part = p_sus_part.toFixed(2);
				//--//

				//Chama a função e monta o gráfico//
				graf_saude(puni_sus,puni_part,pconv_trab,pconv_part,p_sus_part);
				//-//
			});
			//FIM_BT_SAUDE//

			//INICIO_BT_RAZÃO_FATEC//
			$('#bt_razaofatec').on('click',function(){

				//Variaveis conatdoras//
				var dipl = 0, desemp_recal = 0, trab_area = 0, inter_area = 0, muda_area = 0, outro_mot = 0;

				//Porcentagens de cada motivo para ter se inscrito no vestibular da FATEC//
				var pdipl = 0, pdesemp_recal = 0, ptrab_area = 0, pinter_area = 0, pmuda_area = 0, poutro_mot = 0;


				//Percorrendo os dados//
				for(let i in info){

					//Se a razão é o diploma para melhorar o salário
					if(info[i].PORQUESECANDIDATOUAUMAVAGANAFATECFRANCA2=='quero um diploma para tentar melhorar o meu salário')
					{
						dipl++;
					}
					//Se a razão é o desemprego
					if(info[i].PORQUESECANDIDATOUAUMAVAGANAFATECFRANCA2=='estou desempregado e quero me (re)qualificar')
					{
						desemp_recal++;
					}
					//Se a razão é que já trabalha na área
					if(info[i].PORQUESECANDIDATOUAUMAVAGANAFATECFRANCA2=='trabalho na área do curso')
					{
						trab_area++;
					}
					//Se a razão é que se interessa pelo assunto
					if(info[i].PORQUESECANDIDATOUAUMAVAGANAFATECFRANCA2=='me interesso pela área do curso')
					{
						inter_area++;
					}
					//Se a razão é que deseja mudar de área
					if(info[i].PORQUESECANDIDATOUAUMAVAGANAFATECFRANCA2=='quero mudar de área')
					{
						muda_area++;
					}
					if(info[i].PORQUESECANDIDATOUAUMAVAGANAFATECFRANCA2=='outro')
					{
						outro_mot++;
					};
					//FimCondição//
				};
				//FimFor//


				//Porcentagens dos resultados sobre o total//
					//% de quem deseja o diploma
					pdipl = (dipl*100)/info.length;
					pdipl = pdipl.toFixed(2);

					//% de quem deseja requalificação
					pdesemp_recal = (desemp_recal*100)/info.length;
					pdesemp_recal = pdesemp_recal.toFixed(2);

					//% de quem ja trabalha na área
					ptrab_area = (trab_area*100)/info.length;
					ptrab_area = ptrab_area.toFixed(2);

					//% de quem se interessa pela área
					pinter_area = (inter_area*100)/info.length;
					pinter_area = pinter_area.toFixed(2);

					//% de quem quer mudar de área
					pmuda_area = (muda_area*100)/info.length;
					pmuda_area = pmuda_area.toFixed(2);

					//% de quem tem outros motivos não especificados
					poutro_mot = (outro_mot*100)/info.length;
					poutro_mot = poutro_mot.toFixed(2);
				//--//

				//Chama a função e monta o gráfico//
				graf_razaofatec(pdipl,pdesemp_recal,ptrab_area,pinter_area,pmuda_area,poutro_mot);
				//-//
			});
			//FIM_BT_RAZÃO_FATEC//












			// FIM AREA DE PRORGAMAÇÃO DOS GRÁFICOS //
		}
		Req.send();
	//--//
});
//Comentar mais tarde//
	



	



