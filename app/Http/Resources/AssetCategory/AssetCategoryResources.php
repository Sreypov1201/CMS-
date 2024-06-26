<?php

namespace App\Http\Resources\AssetCategory;

use Illuminate\Http\Resources\Json\ResourceCollection;

class AssetCategoryResources extends ResourceCollection
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'data' => $this->collection->transform(function($AssetCategory){
                return[
                    'PKID' => $AssetCategory->PKID,
                    'AssetCategory' => $AssetCategory->AssetCategory,
                    'Remark' => $AssetCategory->Remark,
                ]; 
            })
        ];
    }
}
