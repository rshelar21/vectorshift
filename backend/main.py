from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import networkx as nx

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=['*'],
    allow_headers=['*'],
)

class PipelineDetails(BaseModel):
    nodes : list
    edges : list

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}


@app.post('/pipelines/parse')
def parse_pipeline(pipeline: PipelineDetails):
    nodes = pipeline.nodes
    edges = pipeline.edges

    g = nx.DiGraph()
   
    for node in nodes:
        if 'id' not in node:
            return {"error": "id is missing"}
        g.add_node(node['id'])

    for edge in edges:
        if 'source' not in edge or 'target' not in edge:
            return {"error": "'source' or 'target' is missing"}
        g.add_edge(edge['source'], edge['target'])
    
    
    nodes_len = g.number_of_nodes()
    edges_len = g.number_of_edges()
    
    is_dag = nx.is_directed_acyclic_graph(g);
    return {'is_dag': is_dag, 'num_nodes': nodes_len, 'num_edges': edges_len}

