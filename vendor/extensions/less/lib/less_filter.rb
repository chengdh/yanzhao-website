require 'less'

class LessFilter < TextFilter
  description_file File.dirname(__FILE__) + '/description.html'
  def filter(text)
    parser = Less::Parser.new
    tree = parser.parse(text)
    tree.to_css(:compress => true)
  end
end
