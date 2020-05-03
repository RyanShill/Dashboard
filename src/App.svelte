<script>
    import { onMount } from 'svelte';
    import Chart from './Chart.svelte';
    let result;
    

    onMount(async () => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/todos/10`)
        result = await response.json();
        console.log(result);
});

</script>

<!--Header-->
<div class="jumbotron text-center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/8/86/Ally_Bank_logo.svg" height="10%" width="5%">
</div>



<!--API Cards-->
<div class="container">

<!--Sidebar-->
<div class="sidenav">
    <div class="wrapper">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
    </div>
    </div>
    
<!--Active Calls Card-->
    <div class="row">
        <div class="col-sm-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Active Calls</h5>
                    <p class="card-text">{#if result===undefined} <p></p> {:else} {#await result} <p>Your information is loading</p> {:then value} {value.id} {:catch error} {error.message} {/await} {/if}</p>
                </div>
            </div>
        </div>

<!--Secondary Calls-->
        <div class="col-sm-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Secondary Calls</h5>
                    <p class="card-text">{#if result===undefined} <p></p> {:else} {#await result} <p>Your information is loading</p> {:then value} {value.id} {:catch error} {error.message} {/await} {/if}</p>
                </div>
            </div>
        </div> 

<!--Other Items-->
        <div class="col-sm-6 mt-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Other Items</h5>
                    <p class="card-text">{#if result===undefined} <p></p> {:else} {#await result} <p>Your information is loading</p> {:then value} {value.id} {:catch error} {error.message} {/await} {/if}</p>
                </div>
            </div>
        </div>

<!--Category 4-->
        <div class="col-sm-6 mt-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Category 4</h5>
                    <p class="card-text">{#if result===undefined} <p></p> {:else} {#await result} <p>Your information is loading</p> {:then value} {value.id} {:catch error} {error.message} {/await} {/if}</p>
                </div>
            </div>
        </div>
    </div>
        
    <div>
        <div class="col-sm-6 mt-5">
            <div class="card">
                <div class="card-graph">
                    <div class="card-body">
                        <Chart />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!--Swaggyyyyy-->